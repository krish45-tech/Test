class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  getFulName(formate = true) {
    return formate ? this.#lastNameFirst() : this.#firstNameFirst();
  }
  #lastNameFirst() {
    return `${this.#lastName} ${this.#firstName}`;
  }
  #firstNameFirst() {
    return `${this.#firstName} ${this.#lastName}`;
  }
}

const krish = new Person("Gopi", "krishna");
console.log(krish.getFulName());
