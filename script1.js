'use strict' ; 

const [restaurant] = [{
    name: 'Classico Italiano',
    location: 'Via Angelo, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}];

for (const item of restaurant.categories)

console.log(item)

// console.log(restaurant);
// console.log(restaurant.categories[0]);


// let [main, secondary] = restaurant.categories;
// [main, secondary] = [secondary, main]
// console.log(main, secondary);


// const { name } = restaurant;
// const {
//     name: Monodeia
// } = restaurant;
// console.log(Monodeia);

// const [first, , third] = restaurant.categories;
// console.log(first, third);

// Array Destructuring ESX

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

