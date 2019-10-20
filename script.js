// const ob1 = { a: 10, b: 2 };
// const obj2 = { b: 4, c: 5 };
// const obj3 = { c: 5 , d : 1}

// const obj = Object.assign(ob1,obj2,obj3)

// console.log(obj)

// const sortedObj = Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]))
// console.log(sortedObj)


/*****Sort array of Objects */
// var employees=[]
// employees[0]={name:"George", age:32, retiredate:"March 12, 2014"}
// employees[1]={name:"Edward", age:17, retiredate:"June 2, 2023"}
// employees[2]={name:"Christine", age:58, retiredate:"December 20, 2036"}
// employees[3]={name:"Sarah", age:62, retiredate:"April 30, 2020"}

// employees.sort((a,b)=>{
//   var A = a.name.toLowerCase()
//   var B = b.name.toLowerCase()
//   if(A<B){
//     return -1
//   }
//   else{
//     return 1
//   }
// })
// console.log(employees)

//*************************** */
// const someFunc = (name) => {
//   console.log(name)
// }

// const processInpute = (callback) => {
//   var x = 'me name is..'
//   callback(x)
// }

// processInpute(someFunc)

// function outerFunc(){
//   var a = 'Hi'
//   function innerFunc(){
//     console.log(a)
//   }
//   return innerFunc()
// }

// var x = outerFunc()

// var temp = "this is a temp variable";
// var temp = "this is a second temp variable";
// let temp1 = "this is a temp variable";
// let temp1 = "this is a second temp variable"

// var A = {
//   age:20,
//   disp : function(){
//     function innerFunc(){
//       console.log(this)
//       console.log(this.a)
//     }
//     innerFunc()
//   } 
// }
// A.disp()

// console.log('-----------------------------------------')

// var B = {
//   age : 20,
//   disp : function(){
//     innerFunc = () => {
//       console.log(this)
//       console.log(this.age)
//     }
//     innerFunc()
//   } 
// }
// B.disp()


// var value = []
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })
// .then(res=>res.json())
// .then(data => {
//     // console.log(data)
//     value = data;
//     // console.log(value)
//     value.map((marker)=>{
//         console.log(marker)
//     })

// })

// var promise1 = new Promise((resolve,reject)=>{
//   reject('Hi..')
// })
// .then(value=>{
//   console.log(value)
// })
// .catch(error=>{
//   console.log('error'+error)
// })
// .finally(value =>{
//   console.log('This will run anyway')
// })


// promise1 =  new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('Hi')
//   },1000)
// })

// promise2 =  new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('Hello')
//   },5000)
// })

// Promise.race([promise1,promise2])
// .then( value =>
//   console.log(value)
// )

// function Person(first, last) {
//   this.firstName = first;
//   this.lastName = last;

// }
// Person.prototype.nationality = 'indian'
// var me = new Person('Sandipan','Chatterkee')
// console.log(me.nationality)


// x()
// y()
// function x(){
//   console.log('hi')
// }
// var y = function(){
//   console.log('Hello')
// }

// const obj = {
//   a : 10
// }
// const obj1 = Object.create(obj)
// console.log(obj1)

// var x = {
//   a: 10,
//   b: 20
// }
// for(let i of x){
//   console.log(i)
// }

// removing duplicate array elements 
// var a = [5, 3, 3, 6, 7, 5, 9]
// b = []
// for(let i=0;i<a.length;i++){
//   if(b.indexOf(a[i]) === -1){
//     b.push(a[i])
//   }
// }
// console.log(b)

// var b = {}

// for (let i of a) {
//   b[i] = true
// }
// console.log(b)

// for (let [key, value] in Object.entries(b)) {
//   console.log(value)
// }

/****************************************JAVASCRIPT.INFO ***********************************************/

//Objects
// let a = {
  // name : "Pete"
// }
// let b = {}
// b = a
// b.name = "Peter"
// console.log(a.name)


// const a = {
  // name : "Pete"
// }
// a.name = "Jones"
// console.log(a.name)
// a = {
  // name : ""
// }

// const a = {
  // name : "Pete"
// }
// a.name = "Hi"
// console.log(a.name)

// const user = {
//   name : "Sandipan",
//   age : 24
// }
// const clone = {}
// Object.assign(clone,user,{city:"Kolkata"})
// console.log(clone)

// const user = {
//   name : "Sandipan",
//   otherDetails : {
//     age : 20,
//     city : "Kolkata"
//   }
// }
// const clone = {}
// Object.assign(clone,user)
// clone.otherDetails.age = 21
// console.log(user.otherDetails.age)
// clone.name = "Peter"
// console.log(user.name)


//learn about loadsh
// var objects = [{ 'a': 1 }, { 'b': 2 }];
// var deep = _.cloneDeep(objects);


// const abc = {}
// abc["age"] = 20
// console.log(abc)

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0
// for(let key in salaries){
//   sum = sum + salaries[key]
// }
// console.log(sum)


// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj){
//   for(let key in obj){
//     if(typeof(obj[key]) === "number" ){
//       obj[key] = obj[key] * 2
//     }
//   }
// }
// multiplyNumeric(menu)
// console.log(menu)

//this

// let user = {
//   name: "John",
//   hi(){  console.log(this.name); },
//   bye(){ console.log("Bye"); }
// };

// (user.name == "John" ? user.hi : user.bye)();

// console.log(this)


// let user = {
//   name: "John",
//   go: function(){ 
//           console.log(this.name)
//       }
// };
// (user.go)()
// user.go()


// const arr = [1,2,3,4,5]
// for(key of arr){
//   console.log(key)
// }
// let sum1 = arr.reduce((a,b) => a+b)
// console.log(sum1)


// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// };

// let user = makeUser();

// alert( user.ref );




//Object to primitive conversion.
// var obj = {
//   a : 10,
// }
// var obj2 = {
//   a : 20
// }

// console.log(obj+obj2);
// console.log(obj.a + obj2.a)

// obj2["obj"] = 20;
// console.log(obj2)

// const str = 12
// console.log(str.toString())
// console.log(String(str) === str.toString())

//primitives
// let num = Number("123")
// console.log(num)

// let str = "Hello";
// str.test = 5;
// console.log(str.test);


//array methods

// let arr = ["t", "e", "s", "t"];
// console.log(arr.splice(0,2,"x","y")) // index,deleteCount,elmentsToInsert
// console.log(arr)

// let arr = ["t", "e", "s", "t"];
// let arr1 = arr.slice(0,2); // start,end(optional)
// console.log(arr1);

// let arr = [1, 2];
// let arrayLike = {
//   0: "something",
//   length: "1",
// };
// console.log( arr.concat(arrayLike) );
// console.log(arr.filter(index => index>1))

// let arr = [ 5,4,3 ];

// // let arr1 = arr.sort((a,b) => {
// //   // if(a>b){
// //   //   return 1
// //   // }else{
// //   //   return -1
// //   // }
// //   return a - b 
// // })

// console.log(arr)

// var items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Zeros', value: 37 }
// ];

// items.sort((a,b)=>{
//   const A = a.name.toUpperCase();
//   const B = b.name.toUpperCase();
//   if(A>B){
//     return 1
//   }else{
//     return -1
//   }
// })

// console.log(items)


// let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');

// for (let name of arr) {
//   console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// }

/* TASK */

// function camelize(str){
//   let arr = str.split("-")
//   console.log(arr)
//   let newArr = arr.map((currentValue,index) => {
//           console.log(`${currentValue} - ${index}`)
//           return index === 0 ? currentValue : currentValue.charAt(0).toUpperCase() + currentValue.slice(1)
//    })
//   console.log(newArr.join(""))
// }
// camelize("list-style-image")


// function filterRange(arr,a,b){
//   return arr.filter(currentValue => currentValue >=a && currentValue <= b)
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log( filtered ); // 3,1 (matching values)
// console.log( arr ); // 5,3,8,1 (not modified)


// function filterRangeInPlace(arr, a,b){
//     if(arr.includes(arr.filter(currentValue => currentValue >=a && currentValue <= b))){
//       //not solved
//     }
//     return arr
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// console.log( arr ); // [3, 1]

// let arr = [5, 2, 1, -10, 8];
// ... your code to sort it in the reverse order
// arr.sort((a,b) =>{
//   if(b>a){
//     return 1
//   }else{
//     return -1 
//   }
// })
// console.log( arr ); // 8, 5, 2, 1, -10

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ];
// let names = users.map((currentValue) => currentValue.name);
// console.log( names ); 

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];
// let usersMapped = users.map((currentValue,index) => {
//     let fullName = currentValue.name + currentValue.surname
//     let id = currentValue.id;
//     return {
//       fullName,id
//     }
// })
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
// console.log( usersMapped ) 
// console.log( usersMapped[0].fullName ) // John Smith

// function unique(arr) {
//   let result = []
//   for(let i of arr){
//     // console.log(i)
//     if(!result.includes(i)){
//       result.push(i)
//     }
//   }
//   return result
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log( unique(strings) ); // Hare, Krishna, :-O

//Object.keys,value,entries

// let user = {
//   name: 'John',
//   age: 30
// };
// function count(users){
//   let count = 0
//   for(let user of Object.entries(users)){
//     count ++ 
//   }
//   return count
// }
// console.log( count(user) ); // 2

//Numbers

// let billion = 1e9
// console.log(billion)

//Destructuring

// const [firstName,lastName] = "Ilya Kantor".split(' ')

// const str = "Ilya Kantor"
// const name = str.split(" ")
// console.log(name)
// const str2 = name.join(" ");
// console.log(str2)

// const [a,...rest] = [1,2,3,4,5];
// console.log(rest);
// let arr = [1,2,3];
// let [x,y]  = [...arr]
// console.log(x,y)

// let options = {
//     title: "Menu",
//     height: 200,
//     width: 100
// };
// const {title,...rest} = options
// console.log(rest)  

// function show(x,y=2){
//     console.log(x,y)
// }
// show(4)

// let user = {
//     name: "John",
//     years: 30,
// };
// const {name,years : age,isAdmin = false} = user
// console.log(name,age,isAdmin)

// function topSalary(salaries){
//     let max = 0
//     let arr = []
//     for(let [key,value] of Object.entries(salaries)){
//         if(max < value){
//             max = value
//             arr = [key,max]
//         }
//     }
//     console.log(arr);
// }

// let salaries = {
//     "John": 100,
//     "Pete": 800,
//     "Mary": 250,
//     "Logan": 500
// };
// topSalary(salaries)



//Strings 
// const obj = {
//   a : 20
// }
// obj = {
//   b : 30
// }
// console.log(obj)


// let str = "hi";
// str = "Hello"
// console.log(str);

// let str1 = "hi"
// str1[0] = "H";
// console.log(str1);

// console.log( 'Interface'[0].toLowerCase() ); // 'i'

// let str = 'Widget with id';
// console.log( str.indexOf('id') ) // 0
// if(str.indexOf('W') !== 1){
//   console.log("Found")
// }


//Task
// function ucFirst(str){
//   let res = str.charAt(0).toUpperCase() + str.slice(1)
//   console.log(res)
//   return res
// }

// console.log(ucFirst("john") == "John")

// function checkSpam(str){
//   let res = str.toLowerCase();
//   return res.includes("viagra")
// }

// console.log(checkSpam('buy ViAgRA now') == true)
// console.log(checkSpam('free xxxxx') == true)
// console.log(checkSpam("innocent rabbit") == false)

// function truncate(str,maxlength){
//   let res = str 
//   res.length > maxlength ? res = res.slice(0,maxlength) + "..." : res
//   console.log(res)

// }
// truncate("What I'd like to tell on this topic is :", 20)
// truncate("Hi everyone!",20)

//classes

// class CoffeeMachine {

  

//   waterAmount = 0; // the amount of water inside

//   constructor(power) {
//     this.power = power;
//     console.log( `Created a coffee-machine, power: ${power}` );
//   }

// }

// // create the coffee machine
// let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = 200;

// class Machine extends CoffeeMachine {}
// let machine = new Machine(150)
// machine._waterAmount = 200
// console.log(machine._waterAmount)

class Animal {
  constructor(name){
    this.name = name
  }
  play(){
    console.log(`${this.name} playes`)
  }
}

class Rabbit extends Animal{
  constructor(name,age){
    super(name)
    this.age = age
  }
  hide(){
    super.play()
    console.log(`${this.name} hides`)   
  }
  age1(){
    console.log(`${this.age}`)
  }
}

let r = new Rabbit("Rabbit",12)

// r.play()
r.hide()
r.age1()





























































