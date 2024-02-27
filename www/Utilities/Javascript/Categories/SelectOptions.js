import { Option } from "./Option.js";

class SelectOptions {
  constructor(categories = null, subcategories = null) {
    this.categories = categories;
    this.subcategories = subcategories;
    this.selectBodyHTML = null;
  }
  generateSelectBody(base = true) {
    const selectBody = [];

    if (base === true) {
      selectBody.push('<option value="">Select Doc Category</option>');
    }

    if (this.categories) {
      for (const cat of this.categories) {
        const optionHTML = new Option(cat.category_name).generateOption();

        selectBody.push(optionHTML);
      }
    }

    if (this.subcategories) {
      for (const subCat of this.subcategories) {
        const optionHTML = new Option(subCat.subcategory_name).generateOption();
        selectBody.push(optionHTML);
      }
    }

    this.selectBodyHTML = selectBody.join("");
    return this;
  }

  mount(selectElementId) {
    const selectElement = document.querySelector(selectElementId);

    this.selectElement = selectElement;
    selectElement.innerHTML = this.selectBodyHTML;

    return this;
  }

  addStylingEvent() {
    const selectElement = this.selectElement;

    if (selectElement.value === "") {
      selectElement.style.color = "#a0a0a0";
      selectElement.querySelectorAll("option").forEach((element) => {
        if (element.value !== "") element.style.color = "black";
      });
    }

    selectElement.addEventListener("change", (event) => {
      if (event.target.value === "") {
        event.target.style.color = "#a0a0a0";
      } else {
        event.target.style.color = "black";
        selectElement.querySelectorAll("option").forEach((element) => {
          if (element.value === "") element.style.color = "#a0a0a0";
        });
      }
    });
  }
}

export { SelectOptions };
