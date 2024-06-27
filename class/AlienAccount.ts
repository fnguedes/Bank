import { Account } from "./Account";

export class AlienAccount extends Account{

   constructor(name: string,accountNumber: number){
      super(name, accountNumber)
   }

   deposit = (deposito:number) :void => {
      if(this.ValidateStatus()){
         console.log("Você depositou "+deposito)
         this.setBalance(this.getBalance()+deposito+10)
      }
   }
}