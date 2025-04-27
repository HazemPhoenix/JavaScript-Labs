// console.log(printVariables(1, 2, 3)); // works correctly because of hoisting of function declaration.

function printVariables(value1, value2, value3 = 7) {
  var localVar = 3;
  testingVar = 5; // this variable is now globally scoped

  // prints the entire argument list
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
  return [value1, value2, value3];
}

// console.log(printVariables2(2, 3, 4, 5)); // Error, because the variable printVariables2 is hoisted but uninitialized so it is undefined

var printVariables2 = (value21, value22, value23 = 7) => {
  var localVar = 3;
  testingVar = 5; // this variable is now globally scoped
  // the argument list variable is not defined in function expressions
  //   for (let i = 0; i < arguments.length; i++) {
  //     console.log(arguments[i]);
  //   }
  return [value21, value22, value23];
};

function twoSum(x = 0, y = 0) {
  if (isNaN(x) || isNaN(y)) {
    throw new TypeError("inputs must be numbers");
  }

  /* Another solution (but i prefer the first one) */
  //   x = isNaN(x) ? 0 : x;
  //   y = isNaN(y) ? 0 : y;

  return x + y;
}
