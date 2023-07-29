// same method in subclass

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`
    }

    sleep(){
        return `${this.name} is sleeping`
    }

    isSuperCute(){
        return this.age < 2;
    }

    isCute(){
        return true;
    }
}

class dog extends Animal{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }

    bark(){
        return `${this.name} is barking`
    }

    isCute(){
        return false;
    }
}

const dog1 = new dog("tommy", 2, "labra");
console.log(dog1);
console.log(dog1.eat());
console.log(dog1.sleep());
console.log(dog1.bark());
console.log(dog1.isSuperCute());
console.log(dog1.isCute());
