import { AlienAccount } from "./class/AlienAccount"
import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"

const user: PeopleAccount = new PeopleAccount('Juarez',1,1)
// user.deposit(50)
// user.withdraw(40)
// user.withdraw(20)
// user.deposit(100)

const comp: CompanyAccount = new CompanyAccount('Fellipe',0)
// comp.getLoan(1000)
// comp.deposit(50)
// comp.withdraw(40)
// comp.withdraw(20)
// comp.deposit(100)

const  alien: AlienAccount = new AlienAccount('zezin',2)
// alien.deposit(50)
// alien.withdraw(40)
// alien.withdraw(20)
// alien.deposit(100)