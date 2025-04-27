// console.log(value1, value2, value3); //not accessible because they are local to the function

// console.log(printVariables(3, 5)); // prints [3,5,undefined] if there's not default value for 3rd param

// console.log(printVariables(3, 5, 7, 10, 12, 14)); // returns only the first 3 arguments, but logs the entire arguemnt list

// console.log(localVar); // Error, localVar is inaccessible here, because it is local
// console.log(testingVar); // Error, the variable is not yet defined

// printVariables();

// console.log(localVar); // Error, localVar is inaccessible here, because it is local

// console.log(testingVar); // the variable is printed because it is now in the global scope

/* ------------------------------------------ */

// console.log(value21, value22, value23); //not accessible because they are local to the function

// console.log(printVariables2(3, 5, 7)); // prints the array containing the 3 variables

// console.log(printVariables2(3, 5)); // prints [3,5,undefined] if there's not default value for 3rd param

// console.log(printVariables2(3, 5, 7, 10, 12, 14)); // returns the first 3 parameters only and ignores the rest

// Function expressions do not have the arguemnts variable

// console.log(localVar); // Error, localVar is inaccessible here, because it is local
// console.log(testingVar); // Error, the variable is not yet defined

// printVariables2();

// console.log(localVar); // Error, localVar is inaccessible here, because it is local

// console.log(testingVar); // the variable is printed because it is now in the global scope

console.log(twoSum(3)); // prints 3
console.log(twoSum(3, 2)); // prints 5
console.log(twoSum(3, "hi")); // throws the TypeError if using the first approach and prints 3 if using the second approach
