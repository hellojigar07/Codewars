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

