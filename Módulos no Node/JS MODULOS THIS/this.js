/**
 * THIS
 * 
 * this em ingles signfica => este, esta, isto...
 * No JavaScript, o this faz referencia:
 * 
 * Node => module.exports
 * web => window
 * 
 * Escopo:
 *      => Global -> Quando começamos a escrever nossa aplicação.
 *          No contexto global, o this faz referencia ao objeto global,
 *          que é o objeto window no navegador de internet ou ao objeto global no node.js
 * 
 *      => Local -> Por exemplo, dentro de uma função
 */

const name = "lucas" // Escopo Global

function myName() {
    const myName = "lucas"// Escopo Local
}

console.log(this === module.exports) //Node => module.exports //true

const { persons } = require('./objectsThis.js')//this no escopo global
console.log(persons)

//this no escopo local
let person = {
    name: "Lucas",
    age: 22,
    talk: function() {
        console.log(this.name);//seu mundo e o person e nao existe nada fora dele,pai
    }// logo o this se refere a person que e o maior 
};
person.talk()

//paradoxo
function myFunction() {
    console.log(this)//nesse momento ele e o globo.
}
myFunction()