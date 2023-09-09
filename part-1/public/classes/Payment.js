export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} have ${this.amount} for ${this.details}`;
    }
}
// Generics 
// const add = <T extends object>(obje : T) => {
// let id = Math.ceil(Math.random() * 1000)
// return {...obje , id}
// }
// let f1 = add({name : "mahdi" , age : 22});
// let f2 = add("mahdi");
// console.log(f1);
// Generics
// Enums
// enum ResourceType {
//     AUTHOR , PERSON , FILM , BOOK
// }
// interface Resource<T>{
//     uid : number ; resourceName : ResourceType ; data : T
// }
// const f3 : Resource<object> = {
//     uid : 1 , resourceName : ResourceType.AUTHOR , data : {name : "mahdi"}
// }
// console.log(f3);
// tuples
// let tup : [string , number , boolean] = ["mahdi" , 22 , true] ;
// console.log(tup);
