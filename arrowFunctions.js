var LifeInsurance = require('./insurance')

const ra = new LifeInsurance(101,'ramesh',4500);
const rj = new LifeInsurance(102,'rajesh',5500);

let policyList = [ra,rj];

policyList.forEach(eachPolicy => console.log(eachPolicy.toString()));

let nameList = policyList.map(policy => policy.policyHolderName);

let amountList = policyList.map(policy => policy.policyAmount);

function showPremium(policyAmount = 2000)
{
    return policyAmount * .20;
}

function printPremium(...policyList)
{
    policyList.forEach(eachPolicy => {
        console.log(eachPolicy.policyAmount);
    });
}

console.log(nameList);

console.log(showPremium(amountList[0]));
console.log(showPremium(amountList[1]));
console.log(showPremium());

printPremium(ra);
printPremium(ra,rj);

