import { DioAccount } from './DioAccount' //módulo

export class InvestAccount extends DioAccount{ //herança

    constructor(name: string, accountId: number, balance: number, status: boolean){
        super(name, accountId, balance, status) //atributos da classe mãe        
    }

    depositBonus = (deposit: number): void =>{
        this.setBalance(this.getBalance() + deposit + 10)
    }
}