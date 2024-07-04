// ***............................Tuples........................***
// ...Tuple is a typed of array with a pre-defined length and types for each index...
// Simple meaning of Tuples ...Tuples is the Fixed up the length of the array .As many Types as you give, there 
// is a limit to make the necessary passes the value.
// 1)Pre defined Length
// 2)Pre defined datatype
//     Tuple is Simply Mean By " Type Array "
let arrayType; // ...this is a type of array
// readonly =====>>>>> this property is does not push exist on day after info
function displayPersonInfo(person) {
    const [name, age, NIC] = person;
    console.log(`Name: ${name} , age: ${age} , National Identity Card:${NIC ? "Yes I Have" : "No I Dont Have"}`);
    //The NIC Value is use to Ternary Operator "?" ":"    
}
const person1 = ["Bilal", 19, true];
// const person2 :personInfo =[17,false,"Ali"]     // Error!!!.. You add the tuplles ,when you  have to write ,
// in prinicples then brother peas, order is important 
const person2 = ["Usman", 16, false];
displayPersonInfo(person1); // call the function and put the argument person1 , person2
displayPersonInfo(person2);
function detailPerson(person) {
    const [productName, numberofProduct, productIsShop] = person;
    console.log(`This Product ${productName} and number of product is ${numberofProduct ? "I have this Product in my shop" : "I dont have this Product in my shop"}`);
}
let person3 = ["Smart Watch", 5, true];
let person4 = ["Iphone", 0, false];
detailPerson(person3);
detailPerson(person4);
export {};
