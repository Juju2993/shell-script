function foo(country, capital) {
  this.country = country;
  this.capital = capital;
}
foo.prototype.religion = "Christianity";
let motherland = new foo("Armenia", "Yerevan");
console.log(motherland.religion)
