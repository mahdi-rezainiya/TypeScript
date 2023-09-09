import { HasFormatter } from "../Interfaces/HasFormatter.js"

export class Invoice implements HasFormatter{
    constructor(public client : string , private details : string , readonly amount : number){
        
    }
    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}