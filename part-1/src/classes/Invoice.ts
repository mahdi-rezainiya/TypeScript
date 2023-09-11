import { HasFormatter } from "../Interfaces/HasFormatter.js"

export class Invoice implements HasFormatter{
    constructor(public client : string , public details : string , private amount : number){
        
    }
    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}