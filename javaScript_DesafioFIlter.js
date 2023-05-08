//APENAS numeros pares e divisivies por 5
console.log("Exercicio 1")
const list = [20,3,234,12,17,541,6,87,275,1000]
const newList = list.filter( num => {
    if( num % 2 !== 0) return false;
    if( num % 5 !== 0) return false;
    return true;
 });
console.log(newList)
console.log()
console.log("Exercio 2")
//depois de 1975 e valor de mercado mais de 2 m
const companies = [
    { name: 'Samsung',marketValue: 50, CEO: 'Kim  Hyun Suk', funded0n: 1938},
    { name: 'Microsoft',marketValue: 415, CEO: 'Satya Nadella', funded0n: 1975},
    { name: 'Intel',marketValue: 117, CEO: 'Brian Krzanich', funded0n: 1968},
    { name: 'Facebook',marketValue: 383, CEO: 'Mark Zuckerberg', funded0n: 2004},
    { name: 'Spotify',marketValue: 30, CEO: 'Daniel Ek', funded0n: 2006},
    { name: 'Apple',marketValue: 845, CEO: 'Tim Cook', funded0n: 1976},
];
const filter = companies.filter( companie => {
    if(companie.funded0n >= 1975 && companie.marketValue >= 2) return true;
    else return false;
})
console.log(filter)