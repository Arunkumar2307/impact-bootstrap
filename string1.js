const name1 = "arun" //normal string
const name2 = 'mugesh'
const name3 = new String("arun")  //string object
const name4 = new String("arun")

//when normal strings are compared with ==
//the data are comapared
console.log(name1 == name2); //false
//when normal strings are compared with string object with ==
//the data are comapared
console.log(name1 == name3); //true
//when normal strings are compared with string objectb with ===
//the data are comapared
console.log(name1 === name3); //false
//when normal strings are compared with either == and ===
//both the objects are different indifinate of type
console.log(name3 == name4); //false
console.log(name3 === name4); //false
const name5 =name3
console.log(name3 == name5); //true
console.log(name3 === name5); //true