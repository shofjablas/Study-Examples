//Values and Variables
// let country = "South Korea";
// let continent = "Asia";
let population = 51;

// console.log(country);
// console.log(continent);
console.log(population);

//Data Types
// let isIsland = true;
// console.log(isIsland);

let language;
console.log(language);

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
console.log(typeof language);

//let, const and var
language = "Korean";
console.log(language);

const country = "South Korea";
const continent = "Asia";
const isIsland = true;

//Basic Operators - 1
let populationHalf = population / 2;
console.log(populationHalf);

//Basic Operators - 2
let populationPlusOne = population++;
console.log(populationPlusOne);

//Basic Operators - 3
let populationFinland = 6;
console.log(population > populationFinland);

//Basic Operators - 4
let populationAverage = 33;
console.log(populationAverage > population);

//Basic Operators - 5
// const description =
//   country +
//   " is" +
//   " in " +
//   continent +
//   ", " +
//   "and " +
//   "its " +
//   population +
//   "million " +
//   "people " +
//   "speak " +
//   language;
// console.log(description);

//Strign and Template Literals
const description = `${country} is in ${continent}, and its ${population}million people speak ${language}`;
console.log(description);

if (population > 33) {
  console.log(`'${country} population is above average`);
} else {
  console.log(`${country} population is ${33 - population} average`);
}

//type conversion and coercion

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

//Equality Operators: == vs ===
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// console.log(numNeighbours);

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours === 2) {
//   console.log("More than 1 border ");
// } else console.log("No borders");

//logical opertaors
if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} `);
} else {
  console.log(`${country} does not meet your criteria`);
}

//the switch statement

/*
switch (language) {
  case "chinese" && "mandarin":
    console.log("Most number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great lanuage too :D");
}
*/

//The Conditional (Ternary) Operator

population >= 55
  ? `${country} population is above average.`
  : `${country} population is below average`;
