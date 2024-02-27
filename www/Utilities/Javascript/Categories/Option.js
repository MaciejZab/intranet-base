class Option {
  constructor(name) {
    this.name = name;
  }

  generateOption() {
    const uppercaseFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const optionTemplate = `<option value="${this.name}">${uppercaseFirstLetter(
      this.name
    )}</option>`;
    return optionTemplate;
  }
}

export { Option };
