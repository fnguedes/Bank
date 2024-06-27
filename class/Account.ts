export abstract class Account {
   private readonly name: string
   private readonly accountNumber: number
   private balance: number = 0
   private status: boolean = true

   constructor(name: string,accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
   }

   deposit = (deposito:number): void => {
      if(this.ValidateStatus()){
         console.log("Você depositou "+deposito)
         this.setBalance(this.getBalance()+deposito)
      }
   }
   
   withdraw = (saque:number): void =>{

      if(saque<=this.getBalance()){
         console.log("Você sacou " + saque)
         this.setBalance(this.balance-saque)
      }else{
         console.log("Valor de saque maior que o saldo atual")
      }
   }

   ValidateStatus = ():boolean =>{
      if(this.status){
         return this.status
      }

      throw new Error('Conta inválida')
   }

   getName = (): void => {
      console.log(this.name)
   }

   getAccountNumber = (): void => {
      console.log(this.accountNumber)
   }

   getBalance = (): number => {
      return this.balance
   }

   setBalance = (balance:number):void => {
      this.balance=balance
      console.log('Saldo alterado com sucesso, saldo atual: '+ this.balance)
   }

}