/*
const element = document.getElementById("main-text")
//console.log(element)

const classe = document.getElementsByClassName("paragraph")
//console.log(classe)

const tagNAme = document.getElementsByTagName('h1')
//console.log(tagNAme)

const querya = document.querySelector('p')
//console.log(querya)

const queryb = document.querySelectorAll('p')
//console.log(queryb)
queryb.forEach(element => console.log(element))

const elementeName = document.getElementsByName("main-text")

//ATRIBUTOS DO ELELMETNO
const elemente = document.querySelector("input")
//console.log(elemente.attributes)
//console.log(elemente.value)

//MANIPULAR TEXTO
const elemento = document.getElementById("main-text")
elemento.innerHTML = "hello word <P>novo paragrafo</P>"

//MANIPULAR TEXTO  
const elemento = document.getElementById("main-text")  
elemento.style.backgroundColor = 'red'
elemento.style.color = "red"

//EVENTOS
const button = document.querySelector('button')
button.onclick = () => alert('fui pressionado')

//retorna a tecla clickada no campo elemente
elemente.onkeypress = event => console.log(event.target.value))
*/
const elemente = document.querySelector("input")
elemente.addEventListener('keypress', event => console.log('Tecla pressionada!'))

elemente.addEventListener('keypress', event => console.log(event.target.value))