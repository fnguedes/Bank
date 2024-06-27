import { Account } from "./Account"

export class CompanyAccount extends Account {
   
   constructor(name: string,accountNumber: number){
      super(name, accountNumber)
   }

   getLoan = (emprestimo:number) => {
      if(this.ValidateStatus()){
         console.log('Você pegou um empréstimo de '+ emprestimo)
         this.setBalance(this.getBalance()+emprestimo)
      }
   }

}