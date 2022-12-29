// const cuntory="I love Bangladesh";
// console.log(cuntory);
// let playerName="Sakib";
// let age=35
// console.log(playerName);

// age=25;

// console.log(playerName);
// let playerName;

// playerName="Sakib";
// playerName=34;
// console.log(playerName);
// function mul(a:number,b:number){
//     return a*b;
// }
// array???////
// console.log(mul(12,4))
// let fruits=['apple','banana','orange'];
// // fruits.push('mango');
// fruits.push(455);
// console.log(fruits);
// let mixed=['apple',3,true]
// mixed.push(45);
// mixed.push('Rajdip');
// mixed.push(false);
// console.log(mixed)
// let mixed=['apple','Mango',true,{},4666]
// mixed.push({
//     name:"Rajdip"
// })
// console.log(mixed);
// //object//____
// let person={
//     name:"Sakib",
//     age:62,
//     IsCaptain:true,
// }
// person.name="Mashrafi"
// console.log(person);
// let a:string;
// let b:number;
// a="kdfjdf";
// b="kjfdsjdf"
// let a:(string| number)[]=[];
// a.push(332);
// a.push("hjadfjdfa");
// console.log(a);
// let a:string|number;
// //a="kjdfhhfdj";
// a=44564;
// object........
// let c:object;
// c={
//     name:"fdshdsgf",
//     age:236,
//     male:true,
// }
// console.log(c)
// let c:{
//     name:string,
//     age:number,
//     adult:boolean,
// }
// c={
//     name:"Raj",
//     age:25,
//     adult:true,
// }
// console.log(c)
// let c:object;
// c=[1,2,3];
// let a:any;
// a=5;
// a="hfds"
// let a:any[]=[];
// a.push(6544);
// a.push("kjsdkfjkfdjs");
// console.log(a);
// let b:{
//     name:any;
//     age:any;
// }
// b={
//     name:656545,
//     age:4545,


// }
// console.log(b);
// const myfun=()=>{
//     console.log("hello");
// }
// console.log(myfun())
// let myFun:Function;
// myFun=()=>{
//     console.log("Hello")

// }
// myFun=5;
// const MyFunc=(a:string,b:string,c:string="ture")=>{
//    return (`hello ${a} ${b}`);

// }
// console.log(MyFunc("Rajdip","Raj")); 
// type aliases,,,,,,,,,

// type stringOrNumber=string|number;
// type UserType={ name:string,age:number}

// let UserDetails=(id:stringOrNumber,user:UserType)=>{
//     console.log(`User Id is${id},name is ${user.name
//     } and Age ${user.age}`);
// };
// let sayHello=(user:UserType)=>{
//     console.log(`hello${user.age>50? "sir":"Mr."}${user.name}`);

// };
// let Add:(x:number,y:number)=>number;


// Add=(m:number,n:number)=>{
//     return m+n;

// }
// console.log(Add(45,20))
// let  Calculation:(x:number,y:number,z:string)=>number;
// Calculation=(a:number,b:number,c:string)=>{
//     if(c=='add'){
//         return a+b;
//     }else{
//         return a-b;
//     }

// }
// console.log(Calculation(45,20,'add'))

// let UserDetails:(id:number| string,userinfo:{
//     name:string,
//     age:number,
// })=>void;
// UserDetails=(id:number|string,userinfo:{
//     name:string,
//     age:number,
// })=>{
//     return `User Id :${id} UserName${userinfo.name},User Age :${userinfo.age}`

// }
// console.log(UserDetails(1,"RAj",45))
// class player{
//     name:string;
//     age:number;
//     Country:string
//     constructor(n:string,a:number,c:string){
//         this.name=n,
//         this.age=a,
//         this.Country=c;
//     }
//     play(){
//         console.log(`${this.name}from ${this.Country} age ${this.age}`)
//     }

// }
// const Mashrafi= new player("Sakib",40,"Bangladesh");
// const Sakib=new player("Mashrafi",35,"Bangladesh");
// const players:player[]=[];
// players.push(Sakib);
// players.push(Mashrafi);
// console.log (players);

// class player {

//     constructor(
//         private name: string,
//         public age: number,
//         readonly Country: string
//         ) 
//     {

//     }
//     play() {
//         console.log(`${this.name}from ${this.Country} age ${this.age}`)
//     }

// }

// import{player} from './classes/player.js'
// import{IsPlayer}from './interface/Iplayer.js'
// const Mashrafi = new player("Sakib", 40, "Bangladesh");
// let Sakib :IsPlayer;
// Sakib=new player("abc",24,"Bangladesh")

// const players: IsPlayer[] = [];
// players.push(Sakib);
// players.push(Mashrafi);
// console.log(players);
// interface RectangleOptions{
//     width:number;
//     length:number;
// }

// function drawRectangle(options:{
//     width:number,
//     length:number
// }){
//     let width=options.width;
//     let length=options.length;
// }
// drawRectangle({
//     width:30,
//     length:20,
// });














