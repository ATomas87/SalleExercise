class Persona {
  #name
  #age

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get yearOfBirth(){
    return 2022 - this.#age;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value + " " + this.#name;
  }

}



let persona = new Persona('Juan', 30);

let persona2 = new Persona('José', 40);

Persona.prototype.title = 'Mrs.';

Persona.prototype.yearOfBirth = function () {
  return 2022 - this.age;
}

console.log(persona.yearOfBirth());

console.log(persona.title);

console.log(persona);

console.log(persona.name);




