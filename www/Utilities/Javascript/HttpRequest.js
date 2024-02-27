class HttpRequest {
  constructor(url, method = "GET", body = null, file = null) {
    this.url = url;
    this.config = {
      method: method,
    };

    if (body) {
      this.config.body = body;
      this.config.headers = { "Content-Type": null };
      this.config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    } else if (file) {
      const formData = new FormData();
      formData.append("file", file);
      this.config.body = formData;
    }
  }

  send = async (json = "") => {
    if (json === "json") {
      this.config.body = JSON.stringify(this.config.body);
      this.config.headers["Content-Type"] = "application/json";
    }
    const response = await fetch(this.url, this.config);
    const textData = await response.text();

    let data;

    try {
      // Attempt to parse the text data as JSON
      data = JSON.parse(textData);
    } catch (error) {
      // If parsing as JSON fails, use the original text data
      data = textData;
    }

    return data;
  };
}

export { HttpRequest };
