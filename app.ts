import { CompanyAccount } from "./class/CompanyAccount"
import { InvestAccount } from "./class/InvestAccount"
import { PersonAccount } from "./class/PersonAccount"
   
const objCompany: CompanyAccount = new CompanyAccount(123,'Bcells',1,50,true)
const objPerson: PersonAccount = new PersonAccount(321,'José',2,60,true)
const objInvest: InvestAccount = new InvestAccount('José',3,100,true)

    console.log(objCompany)
    console.log(objPerson)
    console.log(objInvest)
    
    console.log('objCompany:')
    console.log(objCompany.getBalance())
    objCompany.getLoan(1000)
    console.log(objCompany.getBalance())
    objCompany.deposit(100)
    console.log(objCompany.getBalance())
    objCompany.whitdraw(600)
    console.log(objCompany.getBalance())

    console.log('objPerson:')
    console.log(objPerson.getBalance())
    objPerson.deposit(100)
    console.log(objPerson.getBalance())
    objPerson.whitdraw(25)
    console.log(objPerson.getBalance())

    console.log('objInvest:')
    console.log(objInvest.getBalance())
    objInvest.deposit(100)
    console.log(objInvest.getBalance())
    objInvest.whitdraw(25)
    console.log(objInvest.getBalance())
    objInvest.depositBonus(200)
    console.log(objInvest.getBalance())





