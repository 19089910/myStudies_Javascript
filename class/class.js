//sem classe
const person = {
    name: "lucas",
    age: 22,
    talk: function(){
        return `Hello, my name is ${this.name} and i'm ${this.age} years old`
    }
}
const person2 = {
    name: "levi",
    age: 19,
    talk: function(){
        return `Hello, my name is ${this.name} and i'm ${this.age} years old`
    }
}
//...
console.log(person.talk())
console.log(person2.talk())
console.log()
//-----------------------------------------------------------------------------------------------------------------------------
//com a classe
class Classperson {
    name;
    age;
    talk(){
        console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old`)
    }
}
const newPerson = new Classperson()
const newPerson2 = new Classperson()
//...
newPerson.name = "lucas"
newPerson.age = 22
newPerson.talk()
newPerson2.name = "levi"
newPerson2.age = 19
newPerson2.talk()
console.log()
//-----------------------------------------------------------------------------------------------------------------------------
//com o construtor
class construcPerson {
    constructor(name, age){
        console.log(`My constructor ${name}`)
        this.name = name//isso afirma que o que o parmetro do filho/local/constructor sera usado pelo pai/global/construcPerson
        this.age = age
    }
    talk(){
        console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old`)
    }
}
const newConstrucPerson = new construcPerson("lucas", 22)//o metodo consturtor e sempre chamado junto a instancia da classe
newConstrucPerson.talk()
const newConstrucPerson2 = new construcPerson("levi", 19)
newConstrucPerson2.talk()
//...