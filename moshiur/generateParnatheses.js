

// { Driver Code Starts
//Initial Template for javascript

"use strict";


//User function Template for javascript

/**
 * @param {number} N
 * @return {string[]}
 */

class Solution {
    AllParenthesis(N){
        //code here
        let arr = this.getAllCombination(N);

        return arr;
    }
    
    getAllCombination(n) {
        if (n==1) return ['()'];  // breaking condition 
        
        let arr = this.getAllCombination(n-1);
        let returnArr = [];
        
        for(let i=0; i<arr.lenght; i++)
        {
            let first = '()' + arr[i]; 
            let last = arr[i] + '()';
            let middle = '(' + arr[i] + ')';
            
            returnArr.push(first);
            if (first !== last) returnArr.push(last);
            returnArr.push(middle);
        }
        
        return returnArr;
    }
}



main();

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = 1;
  let i = 0;
  for (; i < t; i++) {
    let N = 2;
    let obj = new Solution();
    let res = obj.AllParenthesis(N);
    res.sort();
    for(let s of res)
      console.log(s);
  }
}// } Driver Code Ends


