class cardModel extends HTMLElement {
  constructor() {
    super();
    this.n = 1;
    let varint = "";

    this.st = "width: 350px";
    this.btst =
      "background: transparent;border-radius: 7px;border: 4px solid palevioletred;color: palevioletred;margin: 1em 2em;padding: 1em 4em;";

    this.attribute = [
      this.getAttribute("path"),
      this.getAttribute("p1"),
      this.getAttribute("title"),
      this.getAttribute(this.n),
      this.getAttribute("p2"),
      this.getAttribute("button"),
    ];

    this.var = [
      `<img style="${this.st}" src=${this.attribute[0]}>`,
      `<p>${this.attribute[1]}</p>`,
      `<h3>${this.attribute[2]}</h3>`,
      this.attribute[3],
      `<p>${this.attribute[4]}</p>`,
      `<button style="${this.btst}">${this.attribute[5]}</button>`,
    ];

    for (let m = 0; m < this.attribute.length; m++) {
      if (this.attribute[m] == null || this.attribute[m] == "") {
        this.var[m] = "";
      }
    }

    while (this.getAttribute(this.n) != null) {
      varint += `<li>${this.getAttribute(this.n)}</li>`;
      this.n++;
      if (this.getAttribute(this.n) == null) {
        break;
      }
    }

    this.var[3] = `<ul>${varint}</ul>`;
    this.var.forEach((element) => {
      this.innerHTML += element;
    });
  }
}

window.customElements.define("card-model", cardModel);
