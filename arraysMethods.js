// some() method
// at least one element in the array passes the test implemented

const ages = [3, 10, 18, 20]

const even = (element) => element % 2 === 0;

console.log(ages.some(even));

// every() method
// tests all elements in the array pass the test implemented by the provided function.

const numbers = [1, 2, 3, 4, 5]

const test = (element) => element < 10;

console.log(numbers.every(test));

// reduce() executes a reducer function (provided) on each element of the array giving a single output value

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, number) => accumulator + number;

console.log(array1.reduce(reducer));

// map() creates a new array populated with the results of calling a provided function on every element. 

const array2 = [1, 4, 9, 16];

//pass a function to map
const map1 = array2.map(x => x * 2);

console.log(map1);

// flat() creates a new array with the sub elements of a concatenated array.
const array3 = [4, 5, 9, [3, 6]];
console.log(array3.flat())

// filter() creates a new array with all elements that pass the test implemented by the provided function

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const numbers1 = [2, 3, 4, 7, 11];

const result = numbers1.filter(elements => elements > 5);

console.log(result);