const first_num = 2
const second_num = 2
const nome_01 = 'lucas'
const nome_02 = 'levi'
const array=[ 'andrea', 'edson']
//Faça um programa que SOME 2 números
console.log(first_num + second_num)
//Faça um programa que multiplique 2 números e o resultado adicione 10
console.log((first_num * second_num) + 10)
//Faça um programa que encontre a raiz quadrada de um número, multiplique o resultado por 10 e divida por 33
console.log(((Math.sqrt(first_num) * 10) / 33))
//Faça um programa que inicie com dois nomes, e o programa imprima na tela o seguinte dado: 
//Olá, meu nome é (nome 1) e meu partner do CodeClub é (nome2)
console.log(`Olá, meu nome é ${nome_01} e meu partner do CodeClub é ${nome_02}`)
//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
//Ex: João e João, imprime true. João e Maria, imprime false.
console.log(`${nome_01} e ${nome_01}, impreme ${nome_01 == nome_01}`)
console.log(`${nome_01} e ${nome_02}, impreme ${nome_01 == nome_02}`)
//Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. 
//Ex: João e João, imprime false. João e Maria, imprime true.
console.log(`${nome_01} e ${nome_01}, impreme ${nome_01 === nome_01}`)
console.log(`${nome_01} e ${nome_02}, impreme ${nome_01 === nome_02}`)
//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array.
//Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.
console.log(`${array[0]} e ${array[0]}, impreme ${array[0] == array[0]}`)
console.log(`${array[0]} e ${array[1]}, impreme ${array[0] == array[1]}`)
//Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Porém, os dois nomes devem estar em um Array.
//Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true.
console.log(`${array[0]} e ${array[0]}, impreme ${array[0] === array[0]}`)
console.log(`${array[0]} e ${array[1]}, impreme ${array[0] === array[1]}`)
//Criei 5 Objetos, neles devem conter os dados de 5 pessoas que você conhece. Mínimo 5 dados por pessoa.
const lucas = {
    name : "Lucas Barbosa Ferreira",
    age : 22,
    sex : "M",
    height : 1.72,
    Weight  : 84
}
const levi = {
    name : "Levi Barbosa Ferreira",
    age : 22,
    sex : "M",
    height : 1.71,
    Weight  : 86
}
const edson = {
    name : "Edson Vaz Ferreira",
    age : 48,
    sex : "M",
    height : 1.68,
    Weight  : 82
}
const andreia = {
    name : "Andrea Barbosa Ferreira",
    age : 49,
    sex : "w",
    height : 1.58,
    Weight  : 78
}
//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. 
//Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.
const object0 = {Name2 : "lucas"}
const object1 = {Name1 : "levi"}
console.log(`object0.Name2 e object1.Name1, impreme ${object0.Name2 == object1.Name1}`)
//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. 
//Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.
const object = {
    firstName : "lucas",
    secondName : "levi"
}
console.log(`${object1.firstName} e ${object1.secondName}, impreme ${object1.firstName == object1.secondName}`)
//Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.
console.log(Math.floor(Math.random() * 99 + 1))
//Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. 
//Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo. Ex: 2 e 5. Imprime: false.
console.log(`${first_num}/${second_num} deve imprimir: ${first_num % second_num}`)
//Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo. Ex: 2 e 5. Imprime: false.
console.log(`${first_num} e ${second_num}. imprime]: ${first_num > second_num}`)
//Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é menor que o segundo. Ex: 2 e 5. Imprime: true.
console.log(`${first_num} e ${second_num}. imprime]: ${first_num < second_num}`)
//Crie um programa que mostra o tamanho do Array. 
//Ex: const array = [0, 1] imprime: 2. const array = ["banana", "Maça", "laranja"] imprime: 3
console.log(`const array = [] imprime ${array.length}`)