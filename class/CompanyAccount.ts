import { DioAccount } from './DioAccount' //módulo

export class CompanyAccount extends DioAccount{ //herança
    private cnpj: number
    
        constructor(cnpj: number, name: string, accountId: number, balance: number, status: boolean){
        super(name, accountId, balance, status) //atributos da classe mãe
        this.cnpj = cnpj //atributo individual da classe filha
    }

        getLoan = (loanValue: number): void=>{
            if(this.validateStatus()){
            this.setBalance(loanValue + this.getBalance())
            }
        }

        validateStatus = (): boolean =>{ //assinatura desse método do tipo booleano
            if(this.getStatus()){
                return this.getStatus()
            }
            throw new Error('Conta inválida!')        
        }
    }