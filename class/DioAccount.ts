export abstract class DioAccount {

    private readonly name: string
    private readonly accountId: number    
    private balance: number
    private status: boolean = true

    constructor(name: string, accountId: number, balance: number = 0, status: boolean){
        this.name = name
        this.accountId = accountId
        this.balance = balance
        this.status = status
    }

    setBalance = (balance:number): void =>{
        this.balance=balance
    }

    getBalance = (): number =>{
        return this.balance
    }

    getStatus = (): boolean =>{
        return this.status
    }

    deposit = (depositValue: number): void =>{
        if(this.validateStatus()){
        this.balance = this.balance + depositValue
        }
    }

    whitdraw = (whitdrawValue: number): void =>{
        if(this.validateStatus() === true && this.balance >= whitdrawValue){
            this.balance = this.balance - whitdrawValue
        }
    }

    validateStatus = (): boolean =>{ //assinatura desse método do tipo booleano
        if(this.status){
            return this.status
        }
        throw new Error('Conta inválida!')        
    }
}