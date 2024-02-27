class TableItem {
  constructor(data) {
    this.data = data;
  }

  generateTableRow() {
    const capitalizeFirstLetter = (val) => {
      if (typeof val === "string") {
        return val.charAt(0).toUpperCase() + val.slice(1);
      } else {
        return val;
      }
    };

    const bodyTR = Object.entries(this.data)
      .map(([key, value]) => {
        switch (key) {
          case "doc_language":
            const langsTds = [];
            const langValuePairs = value.split("&");

            const tdLink = (href) => {
              return `<td><a style="color: blue;" href="${href}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="23.58px" height="23.58px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                </a></td>`;
            };

            langValuePairs.forEach((pair) => {
              const indexOfEquals = pair.indexOf("=");
              const value = pair.substring(indexOfEquals + 1);

              if (value !== "null") langsTds.push(tdLink(value));
              else langsTds.push(`<td></td>`);
            });

            return langsTds.join("");

          default:
            return `<td>${capitalizeFirstLetter(value)}</td>`;
        }
      })
      .join("");

    return `<tr>${bodyTR}</tr>`;
  }
}

export { TableItem };
