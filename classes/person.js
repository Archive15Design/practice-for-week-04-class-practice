// Your code here

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  };

  static introducePeople(personArray) {
    if (Array.isArray(personArray) === false){
      throw Error('introducePeople only takes an array as an argument.');
    }
    else if (personArray.every((person) => person instanceof Person) === false) {
      throw Error('All items in array must be Person class instances.');
    }
    else {
      personArray.forEach((person) => person.introduce());
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
