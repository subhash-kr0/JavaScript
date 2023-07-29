// static methods and properties

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static classInfo() {
        console.log("This is a person class");
    }

    static decs = "static property"

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static sayHello() {
        console.log("Hello");
    }
}

const p1 = new Person("harshit", "vashisth", 22);
console.log(p1.fullName);
p1.fullName = "harshit vashisth";
console.log(p1.fullName);
console.log(Person.decs);
Person.sayHello();
Person.classInfo();
console.log(p1);