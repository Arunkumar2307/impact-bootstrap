////////// creating a object 3 types/////////
// console.log("creating a object 3 types");
//// first type ////
// var obj1 ={
//     name:"arun",
//     age:20
// }
// console.log("datatype:",typeof(obj1));
// console.log("before adding place & area",obj1);
// obj1.place="madurai";
// obj1.area="thallakulam";
// console.log("after adding place & area:",obj1);
// console.log("obj1 place value:",obj1["place"]);



/// second type ///
// var obj = new Object();
// obj.name ="arun";
// obj.age =20;
// obj.gender ="male";

// console.log("before delete",obj);
// delete obj["name"];
// console.log("after delete",obj);



// third type object creation using constructor

// the constructor method is a special method of a class for
// creating and initializing an object instance of that class.

// var obj2 = new cons1();
// function cons1() {
//     this.Fname = "ronaldo",
//     this.Age = 36,
//     this.Role = "football player"
// }
// cons1();
// console.log("obj2: ",obj2);
// console.log(Object.keys(obj2));         //any one
// console.log(Object.values(obj2));



// 8/07/24
const user={
   name:"arun",
   age: 20,
   gender: "male",
   display: function(){
     alert("user name is" + this.name)
   }
}
user.name= "aruxii"
console.log(user);



// object1
let using = {
    name:"arun",
    age: 20,
    gender: "male",
    display: function(){
      alert("using name is" + this.name)
    }
 }
 using = {...using,qulification: "degree"}
 console.log(using);



// object2
//  const user = {}
const obj = new Object()
obj.firstname = "arun"
obj.lastname = "kumar"
console.log(obj.lastname + " " + obj.firstname);
console.log(obj["firstname"]+ " " + obj["lastname"]);
// console.log(obj)




// object3
const used = {
    firstname : "mugesh",
    lastname : "waran",
    mark:{
        sslc: 700,
        hsc: 800,
        degree: 7.5
    },
    // fullname: function () {
    //     return this.firstname + " " +this.lastname
    // }
    marks: function () {
        return this.mark.sslc + " " +this.mark.hsc +" "+this.mark.degree
    }
}
console.log(used.firstname);
// console.log(used.marks.degree);
console.log(used.marks());