

// object 
let person = {  
    firstName: "John",
    lastName: "Doe",
    age: 35,
    phone: "999-888-7777"
};


// let fname = person.FirstName || person.firstname || person.firstName || person.LastName || person.lastname || person.lastName; 
// console.log(fname);

// let fname = person.firstName && person.FirstName && person.firstname && person.LastName && person.lastname && person.lastName; 
// console.log(fname);

let f1 = () => {console.log("f1"); return 1};
let f2 = () => {console.log("f2"); return 0};
let f3 = () => {console.log("f3"); return null};
let f4 = () => {console.log("f4"); return "awesome"};
let f5 = () => {console.log("f5"); return -45};
let f6 = () => {console.log("f6"); return undefined};
let f7 = () => {console.log("f7"); return true};
let f8 = () => {console.log("f8"); return false};

let val;
//val = f1() && f2() && f3() && f4();
//val = f1() && f4() && f5() && f3() && f7();
val = f2() || f1() || f4() || f5() || f3() || f7();

console.log(val);

