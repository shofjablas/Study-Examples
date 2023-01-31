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

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
