import { TableItem } from "./TableItem.js";

class TableList {
  constructor(response) {
    this.response = response;
    this.tableBodyHTML = null;
  }

  #groupByDocName() {
    const grouped = [];
    const filtered = [];

    this.response.forEach((obj) => {
      const exists = grouped.some((item) => item.doc_name === obj.doc_name);
      exists ? filtered.push(obj) : grouped.push(obj);
    });

    filtered.forEach((el) => {
      const params = new URLSearchParams(el.doc_language);
      const groupedParams = new URLSearchParams(
        grouped.find((item) => item.doc_name === el.doc_name).doc_language
      );

      for (const [key1, value1] of params) {
        console.log(value1);
        if (value1 !== "null") {
          for (const [key2, value2] of groupedParams) {
            if (key2 === key1 && value2 === "null") {
              groupedParams.set(key2, value1);
            }
          }
        }
      }

      const index = grouped.findIndex((item) => item.doc_name === el.doc_name);
      if (index !== -1) {
        grouped[index].doc_language = decodeURIComponent(groupedParams.toString());
      }
    });

    console.log(grouped);
    return grouped;
  }

  generateTableBody() {
    const tableBody = [];

    let items;
    if (!window.location.href.includes("administrator")) {
      items = this.#groupByDocName();
    } else {
      items = this.response;
    }

    for (const item of items) {
      const tableRowHTML = new TableItem(item).generateTableRow();
      tableBody.push(tableRowHTML);
    }

    this.tableBodyHTML = tableBody.join("");

    return this;
  }

  mount(tableElementId) {
    const tableElement = document.querySelector(tableElementId);
    const tableBody = tableElement.querySelector("tbody");
    tableBody.innerHTML = this.tableBodyHTML;
  }
}

export { TableList };
