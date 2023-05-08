const companies = [
    { name: 'Samsung',marketValue: 50, CEO: 'Kim  Hyun Suk', funded0n: 1938},
    { name: 'Microsoft',marketValue: 415, CEO: 'Satya Nadella', funded0n: 1975},
    { name: 'Intel',marketValue: 117, CEO: 'Brian Krzanich', funded0n: 1968},
    { name: 'Facebook',marketValue: 383, CEO: 'Mark Zuckerberg', funded0n: 2004},
    { name: 'Spotify',marketValue: 30, CEO: 'Daniel Ek', funded0n: 2006},
    { name: 'Apple',marketValue: 845, CEO: 'Tim Cook', funded0n: 1976},
];

const sum = companies.reduce( (acc, companies) => acc + companies.marketValue, 0)
console.log(sum)
// -addicione 10% de valor de mercado para todas as comanias,
// -filtar antes do ano 2000
// -somar o valor de mercado das empresas antes de 2000
// -utilize o map, filter e reduce
const add10PercentMarketValue = company => {
    company.marketValue = company.marketValue + company.marketValue / 10
    return company
};
const oldCompanies = company => company.funded0n < 2000;
const allOldCompaniesMarketValue = (acc, company) => acc + company.marketValue;
const myBestCOmpanies = companies.map(add10PercentMarketValue).filter(oldCompanies).reduce(allOldCompaniesMarketValue, 0)
console.log(myBestCOmpanies)

