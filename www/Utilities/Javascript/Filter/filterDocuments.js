// const config = {
//   tableId: "#documentsTable",
//   docNameTdNthChild: 2,
//   docCategoryTdNthChild: 3,
//   docDescriptionTdNthChild: 4,
//   categorySelectId: "#search_doc_category",
//   documentNameId: "#search_document",
//   documentDescriptionId: "#search_doc_description",
// };

function filterDocuments(config) {
  const table = document.querySelector(`${config.tableId}`);

  const category = document.querySelector(`${config.categorySelectId}`).value.toLowerCase();
  const documentName = document.querySelector(`${config.documentNameId}`).value.toLowerCase();
  const documentDescription = document
    .querySelector(`${config.documentDescriptionId}`)
    .value.toLowerCase();

  const filteredDocuments = document.querySelectorAll(`${config.tableId} tbody tr`);

  filteredDocuments.forEach((doc) => {
    const docName = doc
      .querySelector(`td:nth-child(${config.docNameTdNthChild})`)
      .textContent.toLowerCase();
    const docCategory = doc
      .querySelector(`td:nth-child(${config.docCategoryTdNthChild})`)
      .textContent.toLowerCase();

    const docDescription = doc
      .querySelector(`td:nth-child(${config.docDescriptionTdNthChild})`)
      .textContent.toLowerCase();

    const filterCat = category === "" || (category !== "" && docCategory === category);

    const filterDocName =
      documentName === "" || (documentName !== "" && docName.includes(documentName));
    const filterDocDescription =
      documentDescription === "" ||
      (documentDescription !== "" && docDescription.includes(documentDescription));

    if (filterCat && filterDocName && filterDocDescription) doc.classList.remove("display-none");
    else doc.classList.add("display-none");
  });

  const hasDisplayNone = Array.from(filteredDocuments).some((doc) =>
    doc.classList.contains("display-none")
  );
  if (hasDisplayNone) table.classList.add("searching");
  else table.classList.remove("searching");

  const filterStrips = document.querySelectorAll(`${config.tableId} tbody tr:not(.display-none)`);

  Array.from(filterStrips).forEach((doc, idx) => {
    if (idx % 2 !== 0) {
      doc.classList.add("bg-reconext-light-blue");
    } else {
      doc.classList.remove("bg-reconext-light-blue");
    }
  });
}

const setupEventListeners = (config) => {
  document
    .querySelector(`${config.categorySelectId}`)
    ?.addEventListener("change", () => filterDocuments(config));
  document
    .querySelector(`${config.documentNameId}`)
    ?.addEventListener("input", () => filterDocuments(config));
  document
    .querySelector(`${config.documentDescriptionId}`)
    ?.addEventListener("input", () => filterDocuments(config));
};

export { setupEventListeners };
