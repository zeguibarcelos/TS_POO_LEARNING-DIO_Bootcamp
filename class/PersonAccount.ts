import { DioAccount } from './DioAccount'

export class PersonAccount extends DioAccount{
    private cpf: number

    constructor(cpf: number, name: string, accountId: number, balance: number, status: boolean){
        super(name, accountId, balance, status) //atributos da classe mãe
        this.cpf = cpf
    }
}