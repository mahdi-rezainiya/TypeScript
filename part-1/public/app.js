import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// const charc = "mahdi" ;
// console.log(charc);
// const inputs = document.querySelectorAll('input');
// console.log(inputs);
// inputs.forEach(input => {
//     console.log(input);
// })
// let fName = "mahdi" ;
// fName = 44;
// let age = 25 ;
// age = "ali" ;
// let isMale = true ;
// isMale = "mahdi" ;
// const circ = (diameter : number) => {
//     return diameter * Math.PI
// }
// console.log(circ(12));
// let names = ["mahdi" , "ali" , "hamed" , "omid"];
// names = "mahdi" ;
// names[1] = 24 ;
// names[1] = "mohammad" ;
// names.push("string1");
// console.log(names);
// let numbers = [10 , 20 , 30 , 40 , 50 , 60];
// numbers[1] = 80 ;
// numbers.push(50);
// console.log(numbers);
// let mixed = [10 , 20 , 30 , "mahdi" , "ali"];
// mixed[0] = "subhan" ;
// mixed[1] = 10 ;
// mixed[2] = true ;
// console.log(mixed);
// let person = {name : "mahdi" , age : 25 , isMale : true };
// person = [];
// person.name = 10 ;
// console.log(person);
// explicit type
// let fName = "mahdi" ;
// let fName : string | number | boolean ;
// fName = "mahdi";
// fName = 12 ;
// fName = true ;
// console.log(fName);
// let mixed: (number | string )[] = [];
// mixed[0] = 14 ;
// mixed.push("mahdi");
// console.log(mixed);
// let person : object ;
// personone = [] ;
// console.log(person);
// let personTwo : {name : string , age : number , isMale : true};
// personTwo = {name : "mahdi" , age : 25 , isMale : true};
// personTwo.phone = 40 ;
// console.log(personTwo);
// let age : any ;
// age = 12 ;
// age = "mahdi" ;
// age = true ;
// console.log(age);
// let mixed : any[] = [] ;
// mixed.push(12);
// console.log(mixed);
// let person : {name : any , age : any} ;
// person = {name : 12 , age : "mahdi"};
// console.log(person);
// union type
// let  greet = () => {console.log("hello world !");}
// greet = 22 ;
// greet = "mahdi" ;
// let sayHello = (fName : string):string => {
//     return `hello ${fName}`
// }
// console.log(sayHello("mahdi"));
// let add = (a:number , b:number , c?: number):number => {
//     return a + b
//     console.log(c);
// }
// console.log(add(12 , 8));
// type aliases
// type aliases
// type aliases
// type aliases
// type s = string
// type n = number
// type b = boolean
// let fName : s ;
// let age : n ;
// let isMale : b ;
// fName = "mahdi" ;
// age = 12 ;
// isMale = true ;
// type arrayType = string | number | boolean 
// let arr : arrayType[] = [] ;
// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.push(40);
// console.log(arr);
// type objectType = {name : string , uid : number | string};
// let user : objectType ;
// user = {name : "mahdi" , uid : "1234"};
// console.log(user);
// let greet = (user : {name : string , uid : string | number}) => {
//     console.log(`${user.name} has a uid of ${user.uid}`);
// }
// greet({name : "mahdi" , uid : 1234});
// let greet = Function ;
// greet : (a : string , b : string) => void ;
// let greet :  (a : string , b : string) => void ;
// greet = (name : string , greeting: string) => {
// console.log(`${name} says ${greeting}`);
// }
// greet = (name : string , greeting: boolean) => {
// console.log(`${name} says ${greeting}`);
// }
// greet("mahdi" , "hello")
// // 2
// let calc : (a : number , b : number , c : string) => number ;
// calc = (numOne : number , numTwo : number , action : string) => {
//     if(action === "add"){
//         return numOne + numTwo
//     }
//     else{
//         return numOne - numTwo
//     }
// };
// console.log(calc(3 , 3 , "add"));
// console.log(calc(3 , 3 , "mahdi"));
// type objectType = {name : string , age : number};
// // 3
// let person : (obj : objectType) => void ;
// person = (mahdi : objectType) => {
//     console.log(`my name is ${mahdi.name} and im ${mahdi.age} years old`);
// }
// person({name : "mahdi" , age : 22})
// DOM & type casting
// const anchor = document.querySelector('a')!;
// if(anchor){console.log(anchor.href);}
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// console.log(form.children);
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// class Invoice {
//     public client : string ;
//     private details : string ;
//     readonly amout : number
//     constructor(c : string , d : string , a : number){
//         this.client = c ;
//         this.details = d ;
//         this.amout = a 
//     }
// format(){
//     return `${this.client} owes ${this.amout} for ${this.details}`
// }
// }
// const invOne = new Invoice("mahdi" , "web design" , 240);
// const invTwo = new Invoice("ali" , "ux & ui" , 40);
// console.log(invOne.format());
// console.log(invTwo.format());
// let invoices : Invoice[] = [] ;
// invoices.push(invOne)
// invoices.push(invTwo)
// console.log(invoices);
// for(let inv of invoices){
// console.log(inv.client);
// console.log(inv.details);
// console.log(inv.amout);
// }
// let invOne = new Invoice("mahdi" , "web developer" , 240);
// let invTwo = new Invoice("ali" , "ios developer" , 440);
// console.log(invOne.client);
// console.log(invTwo.details);
// console.log(invTwo.amount);
// interface isPerson {
//     name : string ;
//     age : number ;
//     speak(a : string): void ;
//     spend(a : number) : number
// }
// const me : isPerson = {
//     name : "mahdi" , age : 22 , speak(text : string){console.log(text);}, spend(amount : number){return amount} 
// }
// const greetPerson = (person : isPerson) => {
// console.log("hello" , person.name);
// }
// greetPerson(me)
// let Docs : HasFormatter[] = [] ;
// Docs.push(DocOne);
// Docs.push(DocTwo);
// console.log(Docs);
// let DocTwo : Payment ;
// let DocOne : Invoice ;
let DocOne;
let DocTwo;
// DocOne = new Invoice("mahdi" , "web design" , 240);
// DocTwo = new Payment("ali" , "ux & ui" , 40);
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'صورتحساب') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
