import { HasFormatter } from "../Interfaces/HasFormatter.js"

export class Payment implements HasFormatter{
    constructor(public recipient : string , public details : string , private amount : number){
        
    }
    format(){
        return `${this.recipient} have ${this.amount} for ${this.details}`
    }
}