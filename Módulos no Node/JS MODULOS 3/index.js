const objectsAndFunction = require('./objectsAndFunction.js')

console.log(objectsAndFunction.sum(2,3))
console.log(objectsAndFunction.multi(2,3))
console.log(objectsAndFunction.person.name)

//ouu --------------------------------------------------------------------------------
const { sum, multi, person } = require('./objectsAndFunction.js') 
 
console.log(sum(2,3)) 
console.log(multi(2,3)) 
console.log(person.name)