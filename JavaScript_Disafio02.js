//[ ] Faça um programa que compare um número com 10 e imprime na tela 
//"o número é maior, o número é menor o número é igual"
console.log("Exericio 1:")
let numero = Math.floor(Math.random() * 19 + 1)

if (numero < 10) {
    console.log(numero + " o número é menor que 10")
}else if(numero > 10){
    console.log(numero + " o número é maior que 10")
}else {
    console.log(numero + " o número é igual a 10")
}
//[ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO
console.log()
console.log("Exericio 2:")
//objeto pessoa em branco
let pessoa = {
    idada : '', 
    nacionalidade : "" 
}
//definir a nacionalidade de forma aleatoria
let umadez = Math.floor(Math.random() * 9 + 1)
switch(umadez){
    case 1: pessoa.nacionalidade = "brasileira"
    break
    case 2: pessoa.nacionalidade = "venezuelana"
    break
    case 3: pessoa.nacionalidade = "espanhola"
    break
    case 4: pessoa.nacionalidade = "francesa"
    break
    case 5: pessoa.nacionalidade = "australiana"
    break
    case 6: pessoa.nacionalidade = "japonesa"
    break
    case 7: pessoa.nacionalidade = "canadense"
    break
    case 8: pessoa.nacionalidade = "italiana"
    break
    case 9: pessoa.nacionalidade = "mexicana"
    break
    case 10: pessoa.nacionalidade = "argentina"
    break
    default: pessoa.nacionalidade = "nacionalidade desconhecida"
    break
}

console.log("A nacionalidade do objeto pesso é: " + pessoa.nacionalidade)
//if else
if (pessoa.nacionalidade == "brasileira"){
    console.log("Essa pessoa é uma brasileira")
}else {
    console.log("Essa pessoa não é uma brasileira")
}
//ternario
pessoa.nacionalidade == "brasileira" ? console.log("Essa pessoa é uma brasileira") : console.log("Essa pessoa não é uma brasileira")

//[ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'.
// Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
//Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.
console.log()
console.log("Exericio 3:")
let numeroSortido = Math.floor(Math.random() * 9 + 1)
let numeroApostado = Math.floor(Math.random() * 9 + 1)
console.log('seu numero foi: ' + numeroApostado + " o numero sortiado e: "+ numeroSortido)
if(numeroSortido == numeroApostado){
    console.log("voce acertou ganhou")
} else{
    console.log("voce nao ganhou")
}
//[ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.
console.log()
console.log("Exericio 4:")
let numeros = []

for(let i = 0; i < 3; i++){
    let num = Math.floor(Math.random() * 9 + 1)
    numeros.push(num)
}

let maior = numeros[0]
let menor = numeros[0]

for(let num in numeros){
    if(num > maior){
        maior = num
    }
    if(num < menor){
        menor = num
    }
}
console.log("Os números sorteados são:", numeros)
console.log("O maior número é:" + maior)
console.log("O menor número é:" + menor)
//[ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa,
// deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira 
//para ser aprovada.
console.log()
console.log("Exericio 5:")
let candidatos = [
    { nome: "João", idade: 25, sexo: "M", profissao: "Engenheiro", nacionalidade: "Brasileiro" },
    { nome: "Maria", idade: 18, sexo: "F", profissao: "Estudante", nacionalidade: "Brasileira" },
    { nome: "Pedro", idade: 30, sexo: "M", profissao: "Advogado", nacionalidade: "Argentino" },
    { nome: "Ana", idade: 28, sexo: "F", profissao: "Médica", nacionalidade: "Brasileira" },
    { nome: "Lucas", idade: 16, sexo: "M", profissao: "Estudante", nacionalidade: "Brasileiro" },
  ];
  
  const MIN_IDADE = 18;
  let NACIONALIDADE = "Brasileiro";


  for(let candidato of candidatos) {
    if(candidato.idade >= MIN_IDADE && candidato.nacionalidade === NACIONALIDADE) {
      console.log(`${candidato.nome} foi aprovado no processo.`);
    } else {
      console.log(`${candidato.nome} não foi aprovado no processo.`);
    }
  }
//[ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada.
//São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.
console.log()
console.log("Exericio 6:")

function explicarNota(nota) {
    switch (nota) {
      case 0:
        return "A apresentação foi muito ruim, não atingiu nenhum critério.";
      case 1:
      case 2:
      case 3:
        return "A apresentação precisa de muitas melhorias para ser considerada satisfatória.";
      case 4:
      case 5:
        return "A apresentação foi satisfatória, mas ainda há espaço para melhorias.";
      case 6:
      case 7:
        return "A apresentação foi boa, mas poderia ser melhorada em alguns pontos.";
      case 8:
      case 9:
        return "A apresentação foi ótima, com poucos pontos que poderiam ser melhorados.";
      case 10:
        return "A apresentação foi excelente, atingiu todos os critérios com perfeição.";
      default:
        return "Nota inválida. Por favor, informe uma nota entre 0 e 10.";
    }
  }
  let notas = [];

for (let i = 1; i <= 5; i++) {
    let nota = Math.floor(Math.random() * 9 + 1)
    notas.push(nota);

}

for (let i = 0; i < notas.length; i++) {
    console.log(`Jurado ${i + 1}: ${explicarNota(notas[i])}`);
}
//[ ] Faça um programa onde leia um numero e diga se ele é par ou impar.
console.log()
console.log("Exericio 7:")
let numeropar = Math.floor(Math.random() * 9 + 1)
if(numeropar % 2 === 0){
    console.log(numero + " é par")
}else{
    console.log(numero + " é ímpar")
}
//[ ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar,
// - é par e divisível por 5.
console.log()
console.log("Exericio 8:")
let numerooito = Math.floor(Math.random() * 99 + 1)
// verifica se o número é par
if (numerooito % 2 === 0) {
    console.log(numerooito + " é um número par.");
    // verifica se o número é divisível por 5
    if (numerooito % 5 === 0) {
      console.log(numerooito + " é par e divisível por 5.");
    }
  } else {
    console.log(numerooito + " é um número ímpar.");
    // verifica se o número é um número primo
    let primo = true;
    for (let i = 2; i < numerooito; i++) {
      if (numerooito % i === 0) {
        primo = false;
        break;
      }
    }
    if (primo) {
      console.log(numerooito + " é um número primo e ímpar.");
    }
  }
  
//[ ] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente:
// - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES 
// - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
//Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.
console.log() 
console.log("Exericio 9:")
let arrayList = [];
let VEZES = 4
for (let  i = 0; i < VEZES; i++) {
    let num = Math.floor(Math.random() * 9 + 1)
    arrayList[i] = num 
}

let par = true;
let impar = true;
for (let i = 0; i < VEZES; i++) {
    if (arrayList[i] % 2 === 0) {
        impar = false;
    } else {
    par = false;
    }
}

if (par) {
    console.log("TODOS OS NÚMEROS SÃO PARES.");
  } else if (impar) {
    console.log("TODOS OS NÚMEROS SÃO IMPARES.");
  } else {
    console.log("Há números pares e ímpares.");
  }