
// array 
// let arr = [30, 40, 50, 60];
// let first = arr[0], second = arr[1], third = arr[2]; 
// let [first, , second, third] = arr; 
// console.log(first, second, third);

function getPerson() {
    // database call to get person infomration;
    let firstName = 'Jo\'hn';
    let lastName = 'Doe';
    let age = 35;
    let phone = "999-888-7777"

    return [firstName, lastName, age, phone];
}

/* /// C# expression 

public List<object> GetPerson() {
    // database call to get person infomration;
    string firstName = "John";
    string lastName = "Doe";
    int age = 35;
    string phone = "999-888-7777"
    return new List<object>() { firstName, lastName, age, phone };
}

// fucntion caller side 
 List<object> response = GetPerson();
 string first = (sring)response[0]; 
 string last = (string)response[1];
 int age = (int)response[2];
 string phone = (string)response[3];
*/

// let [first, last, age, phone] = getPerson();
// console.log(`first=${first}, last=${last}, age=${age}, phone=${phone}`);


// object 
let person = {  
    firstName: "John",
    lastName: "Doe",
    age: 35,
    phone: "999-888-7777"
};

// let {lastName, age} = person;
// let {lastName:x, age:y} = person;
// let x = person['lastName'];
// let y = person['age'];
// console.log(`lastName=${x}, age=${y}`);


// spread 

// var pArr = getPerson();

// setPerson(arr[0], arr[1], arr[2], arr[3]);
// setPerson(...pArr);
// let arr1 = [];
// let arr2 = [];

// let merged = [...arr1, ...arr2];

// function setPerson(firstName, lastName, age, phone) {
//     // call to database / api to store the data 
//     console.log(`first=${firstName}, last=${lastName}, age=${age}, phone=${phone}`);
// }


// Rest operator 
let arr1 = [30, 40, 50, 60, 70, 80]; // reference 
let arr2 = [90, 100]

let c = [...arr2, ...arr1.filter( (v, i) => i != 1 && i != 3 ) ]; // copy, different reference  


console.log(c);
