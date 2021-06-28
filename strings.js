// 1
function reverseWords(str) {
  let reverse = str
    .split(" ")
    .map((el) => {
      return el.split("").reverse().join("");
    })
    .join(" ");
  return reverse;
}

console.log(reverseWords("This is an example!"));
console.log(reverseWords("Double  space"));
// test
let str1 = "hello";
let res1 = str1.split("").reverse().join("");
console.log(res1);

// 2
function titleCase(title, minorWords) {
  var minorWords =
    typeof minorWords !== "undefined"
      ? minorWords.toLowerCase().split(" ")
      : [];
  return title
    .toLowerCase()
    .split(" ")
    .map(function (v, i) {
      if (v != "" && (minorWords.indexOf(v) === -1 || i == 0)) {
        v = v.split("");
        v[0] = v[0].toUpperCase();
        v = v.join("");
      }
      return v;
    })
    .join(" ");
}

console.log(titleCase("a clash of KINGS", "a an the of"));

//studying answer2
const titleCaseStudy = (title, minorWords) => {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(" ") : [];
	console.log(minorWords);
	return title.toLowerCase().split(" ").map((el, i) => {
		if (el != "" && minorWords.indexOf(el) === -1 || i == 0) {
			el = el.split("");
			el[0] = el[0].toUpperCase();
			el = el.join("");
		}
		return el;
	}).join(" ");
};
console.log(titleCaseStudy("a clash of KINGS", "a an the of"));

const a = [1, 2, 3, 4, 5];
console.log(a.indexOf(4));


// 3
function dirReduc(arr) {
	const result = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "NORTH" && arr[i + 1] === "SOUTH" || arr[i] === "SOUTH" && arr[i + 1] === "NORTH" || arr[i] === "EAST" && arr[i + 1] === "WEST" || arr[i] === "WEST" && arr[i + 1] === "EAST"){
            i++
        } else {
            if(result[result.length - 1] === "NORTH" && arr[i] === "SOUTH" || result[result.length - 1] === "SOUTH" && arr[i] === "NORTH" || result[result.length - 1] === "EAST" && arr[i] === "WEST" || result[result.length - 1] === "WEST" && arr[i] === "EAST"){
                result.pop()
            } else {
                result.push(arr[i])
            }
        }
    }
    return result
};
console.log(dirReduc(['EAST', 'NORTH', "EAST"]))
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

// solution 2 forEach
function dirReduc2(arr){
    const opposites = {'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    const result = []
    arr.forEach(item => {
        if(result.length) {
            const prevItem = result.pop()
            if(prevItem !== opposites[item]) {
                result.push(prevItem)
                result.push(item)
            }
        } else {
            result.push(item)
        }
    })
    return result
};

// solution 3 reduce
function dirReduc3(arr){
    const opposites = {'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return arr.reduce((acc, cur) => (opposites[acc.slice(-1)] === cur ? acc.pop() : acc.push(cur), acc), [])
};