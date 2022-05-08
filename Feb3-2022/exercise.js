
// Rest pattern 
let arr1 = ["Mango", "Banana", "Avocado", "Blackberry"];
let arr2 = [4, 5, 6, 7, 8, 9];

let joinArr = [...arr1, ...arr2];

let [, , a1, ...restOfItems] = joinArr;

// console.log(restOfItems);

function add (...numbers) {
    let sum = 0;

    for (let i=0; i<numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

let total = add(5, 6, 1, 2);
// console.log(total);

// Short circuiting  &&  ||  


let x1 = "x1", x2=null, x3, x4="x4", x5=0;

let and = x1 && x4 && x2 && x5; // first falsy value or last value 
let or = x2 || x3 || x5; // first trutry value or last value 

function f1() {
    console.log("f1 called!");
    // Cast vote, candidate information update  
    return true;
}

function f2() {
    console.log("f2 called!");
    // update voter information 
    return true;
}

//let both = f1() && f2();
let anyOne = f1() || f2(); 

console.log(anyOne);
