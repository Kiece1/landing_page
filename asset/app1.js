class cardModel extends HTMLElement {
  constructor() {
    super();
    
    let Nlines = 0;
    let f1 = `<img src=${this.getAttribute("pathPhoto")}\>`;
    let f2 = "";
    if (this.getAttribute("paragraph1") != "") {
      f2 = `<p>${this.getAttribute("paragraph1")}</p>`;
    }
    let f3 = `<h3>${this.getAttribute("name")}</h3>`;
    Nlines = this.getAttribute("numberOfLines");
    console.log(Nlines);
    let f4int = "";
    let line = "";
    for (let n = 1; n <= Nlines; n++) {
      line = this.getAttribute("line" + n);
      console.log(line);
      f4int += `<li>${line}</li>`;
    }

    let f4 = `<ul>` + f4int + `</ul>`;
    console.log(f4);
    let f5 = "";
    if (this.getAttribute("paragraph2") != "") {
      f5 = `<p>${this.getAttribute("paragraph2")}</p>`;
    }

    `<p>${this.getAttribute("paragraph")}</p>`;
    let f6 = "";

    if (this.getAttribute("btNText") != "") {
      f6 = `<button>${this.getAttribute("btNText")}</button>`;
    }
    this.innerHTML = f1 + f2 + f3 + f4 + f5 + f6;
  }
}

window.customElements.define("card-model", cardModel);
