class cardModel extends HTMLElement {
  constructor() {
    super();
    this.n = 1;
    let varint = "";

    this.var = [
      `<img src=${this.getAttribute("path")}>`,
      `<p>${this.getAttribute("p1")}</p>`,
      `<h3>${this.getAttribute("title")}</h3>`,
      this.getAttribute(this.n),
      `<p>${this.getAttribute("p2")}</p>`,
      `<button>${this.getAttribute("button")}</button>`,
    ];

    while (this.getAttribute(this.n) != null) {
      varint += `<li>${this.getAttribute(this.n)}</li>`;
      this.n++;
      if (this.getAttribute(this.n) == null) {
        break;
      }
    }

    this.var[3] = `<ul>${varint}</ul>`;

    this.var.forEach((element) => {
      console.log(element);
      this.innerHTML += element;
    });
  }
}

window.customElements.define("card-model", cardModel);
