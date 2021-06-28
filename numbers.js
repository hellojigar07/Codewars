// 1
let arrDiff = (a, b) => {
  let arr = [];
  a.filter((el) => {
    if (!b.includes(el)) {
      arr.push(el);
    }
  });
  return arr;
};

console.log(arrDiff([3, 4, 5, 6, 7], [4, 5, 3]));
//____________________________________________________________________________________________________________

// 2
let squareDigits = (num) => {
  const squareRoot = (n) => n * n;
  const result = [];
  const numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    result.push(squareRoot(parseInt(numStr[i])));
  }
  return parseInt(result.join(""));
};
console.log(squareDigits(9119));
// or
function squareDigitsO(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}
//________________________________________________________________________________________________________________

// 3
var stringToNumber = (str) => {
  return parseInt(str);
};
console.log(stringToNumber("7"));
//________________________________________________________________________________________________________________

// 4
console.log("-----------4---------");
function countPositivesSumNegatives(input) {
  let res = [];
  if (!input) {
    return [];
  } else {
    if (input.length <= 0) {
      return [];
    } else {
      let positiveCount = 0;
      let negativeSum = 0;

      for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
          positiveCount++;
        } else {
          negativeSum += input[i];
        }
      }
      res.push(positiveCount);
      res.push(negativeSum);
      return res;
    }
  }
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
//________________________________________________________________________________________________________________

// 5
const findUnique = (arr) => {
  let array = arr.sort((a, b) => a - b);
  console.log(array);
  if (array[0] === array[1]) {
    return array[array.length - 1];
  } else {
    return array[0];
  }
};

console.log(findUnique([1, 1, 2, 1, 1, 1]));
console.log(findUnique([0, 1, 0]));
console.log(findUnique([0, 0, 0.55, 0, 0]));

// another solution
function findUniq1(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

// 6
console.log("--------------------- times ----------------------");
function zero(sign) {
  let n = 0;
  if (sign) {
    if (sign[0] === "plus") {
      return n + sign[1];
    } else if (sign[0] === "minus") {
      return n - sign[1];
    } else if (sign[0] === "multiply") {
      return n * sign[1];
    } else if (sign[0] === "divide") {
      return Math.floor(n / sign[1]);
    }
  } else {
    return n;
  }
}

function one(sign) {
  let n = 1;
  if (sign) {
    if (sign[0] === "plus") {
      return n + sign[1];
    } else if (sign[0] === "minus") {
      return n - sign[1];
    } else if (sign[0] === "multiply") {
      return n * sign[1];
    } else if (sign[0] === "divide") {
      return Math.floor(n / sign[1]);
    }
  } else {
    return n;
  }
}

function two(sign) {
  let n = 2;
  if (sign) {
    if (sign[0] === "plus") {
      return n + sign[1];
    } else if (sign[0] === "minus") {
      return n - sign[1];
    } else if (sign[0] === "multiply") {
      return n * sign[1];
    } else if (sign[0] === "divide") {
      return Math.floor(n / sign[1]);
    }
  } else {
    return n;
  }
}

function three(sign) {
  let n = 3;
  if (sign) {
    if (sign[0] === "plus") {
      return n + sign[1];
    } else if (sign[0] === "minus") {
      return n - sign[1];
    } else if (sign[0] === "multiply") {
      return n * sign[1];
    } else if (sign[0] === "divide") {
      return Math.floor(n / sign[1]);
    }
  } else {
    return n;
  }
}
function four(sign) {
  let n = 4;
  if (sign) {
    if (sign[0] === "plus") {
      return n + sign[1];
    } else if (sign[0] === "minus") {
      return n - sign[1];
    } else if (sign[0] === "multiply") {
      return n * sign[1];
    } else if (sign[0] === "divide") {
      return Math.floor(n / sign[1]);
    }
  } else {
    return n;
  }
}
function five(sign) {
  let n = 5;
  if (sign) {
    if (sign[0] === "plus") {
      return n + sign[1];
    } else if (sign[0] === "minus") {
      return n - sign[1];
    } else if (sign[0] === "multiply") {
      return n * sign[1];
    } else if (sign[0] === "divide") {
      return Math.floor(n / sign[1]);
    }
  } else {
    return n;
  }
}
function six(sign) {
  let n = 6;
  if (sign) {
    if (sign[0] === "plus") {
      return n + sign[1];
    } else if (sign[0] === "minus") {
      return n - sign[1];
    } else if (sign[0] === "multiply") {
      return n * sign[1];
    } else if (sign[0] === "divide") {
      return Math.floor(n / sign[1]);
    }
  } else {
    return n;
  }
}
function seven(sign) {
  let n = 7;
  if (sign) {
    if (sign[0] === "plus") {
      return n + sign[1];
    } else if (sign[0] === "minus") {
      return n - sign[1];
    } else if (sign[0] === "multiply") {
      return n * sign[1];
    } else if (sign[0] === "divide") {
      return Math.floor(n / sign[1]);
    }
  } else {
    return n;
  }
}
function eight(sign) {
  let n = 8;
  if (sign) {
    if (sign[0] === "plus") {
      return n + sign[1];
    } else if (sign[0] === "minus") {
      return n - sign[1];
    } else if (sign[0] === "multiply") {
      return n * sign[1];
    } else if (sign[0] === "divide") {
      return Math.floor(n / sign[1]);
    }
  } else {
    return n;
  }
}
function nine(sign) {
  let n = 9;
  if (sign) {
    if (sign[0] === "plus") {
      return n + sign[1];
    } else if (sign[0] === "minus") {
      return n - sign[1];
    } else if (sign[0] === "multiply") {
      return n * sign[1];
    } else if (sign[0] === "divide") {
      return Math.floor(n / sign[1]);
    }
  } else {
    return n;
  }
}

function plus(num) {
  return ["plus", num];
}
function minus(num) {
  return ["minus", num];
}
function times(num) {
  return ["multiply", num];
}
function dividedBy(num) {
  return ["divide", num];
}

console.log(two(times(one())));
console.log(two(plus(four())));
console.log(five(times(five())));
console.log(seven(times(five())));
console.log(six(dividedBy(two())));
console.log(eight(dividedBy(three())));

// other solution 1;
function zero(fn) {
  return fn ? fn(0) : 0;
}
function one(fn) {
  return fn ? fn(1) : 1;
}
function two(fn) {
  return fn ? fn(2) : 2;
}
function three(fn) {
  return fn ? fn(3) : 3;
}
function four(fn) {
  return fn ? fn(4) : 4;
}
function five(fn) {
  return fn ? fn(5) : 5;
}
function six(fn) {
  return fn ? fn(6) : 6;
}
function seven(fn) {
  return fn ? fn(7) : 7;
}
function eight(fn) {
  return fn ? fn(8) : 8;
}
function nine(fn) {
  return fn ? fn(9) : 9;
}

function plus(n) {
  return function (v) {
    return v + n;
  };
}
function minus(n) {
  return function (v) {
    return v - n;
  };
}
function times(n) {
  return function (v) {
    return v * n;
  };
}
function dividedBy(n) {
  return function (v) {
    return v / n;
  };
}

// other solution 2
[
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
].forEach(function (funName, i) {
  this[funName] = function (operation) {
    return operation ? operation(i) : i;
  };
});

function plus(operandRight) {
  return function (operandLeft) {
    return operandLeft + operandRight;
  };
}
function minus(operandRight) {
  return function (operandLeft) {
    return operandLeft - operandRight;
  };
}
function times(operandRight) {
  return function (operandLeft) {
    return operandLeft * operandRight;
  };
}
function dividedBy(operandRight) {
  return function (operandLeft) {
    return operandLeft / operandRight;
  };
}

// 7
console.log("7 Sum of positive or negative integer");
function getSum(a, b) {
  let sum = 0;
  if (a === b) {
    sum = b;
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum;
}

console.log(getSum(1, 5));
console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(-1, 2));

// Another solution
const GetSum1 = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

// 8
function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([3, 2, 4], 6));
