var LifeInsurance = require('./insurance')

class Application{
static main(){

const ra = new LifeInsurance(101,'ramesh',4500);
const rj = new LifeInsurance(101,'rajesh',5500);

let policyList = [ra,rj];

for(let i=0;i<policyList.length;i++)
{
    console.log('Record for : ' + policyList[i].policyHolderName);
    console.log(policyList[i].toString());
}

//console.log(i);
}
}
Application.main();

