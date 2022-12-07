class cardModelNew extends HTMLElement {
  constructor() {
    super();

    this.var = [
      "pathPhoto",
      "paragraph1",
      "name",
      "numberOfLines",
      "paragraph2",
      "btnText",
    ];

    this.method = [
      ["<img src=", "/>"],
      ['<p>"', "</p>"],
      ["<h3>", "</h3>"],
      ["numberOfLines", ""],
      [("<p>", "</p>")],
      ["<button>", "</button>"],
    ];

    console.log(this.var);
    console.log(this.method);

    // for (this.element in this.var) {
    //     return `<img src=${this.getAttribute(this.element)}\>`;
    //     this.innerHTML = fun1();
    // }

    // for (let n = 0; n < this.var.length; n++) {
    const fun1 = () => {
      return `${this.method[0][0]}"${this.getAttribute("pathPhoto")}"${
        this.method[0][1]
      }"`;
    };
    console.log(fun1());
    this.innerHTML = fun1();
  }
}

// const f1 = new fun1();

window.customElements.define("card-model-new", cardModelNew);

// function fun2() {
//   return "Hello, World!!!";
// }

// console.log(fun2);

// function fun2() {
//   return "Hello, World!!!";
// }

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// // Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");

// // Display age
// document.getElementById("demo").innerHTML =
//   "My father is " + myFather.age + ".";
