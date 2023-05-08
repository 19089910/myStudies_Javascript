console.log("Exercicio 1")
const pessoas = [
    {name: 'Angelina Jolie',vip: true},
    {name: 'Brad Pitt',vip: true},
    {name: 'João Silva',vip: false},
    {name: 'Maria Oliveira',vip: false}
  ];
//usanso OPERADO spread e ternario
const setores = pessoas.map( pessoas => 
    pessoas.vip == true ? {...pessoas, sector : "Black"} : {...pessoas, sector : "Green"}
)
//outra foma de fazer
const setores2 = pessoas.map( pessoas =>{
    if (pessoas.vip == true) {
        const newPessoas = {
            name : pessoas.name,
            vip : pessoas.vip,
            sector : "Black"
        }
        return newPessoas;
        } else {
        const newPessoas = {
            name : pessoas.name,
            vip : pessoas.vip,
            sector : "Green"
        }
        return newPessoas;  
        }
    }
)
console.log(setores)
console.log(setores2)

console.log()
console.log("Exercicio 2")

const alunos = [
    { name: 'João', testGrade: 8.5 },
    { name: 'Maria', testGrade: 7.0 },
    { name: 'Pedro', testGrade: 6.5 },
    { name: 'Ana', testGrade: 9.0 },
    { name: 'Felipe', testGrade: 5.5 }
  ];
const resultado = alunos.map( pessoas => {
    if(pessoas.testGrade <= 7) {
    return {name : pessoas.name, finalResult : "approved"}
    } else {
    return {name : pessoas.name, finalResult : "disapproved"}
    }
});
console.log(resultado)
