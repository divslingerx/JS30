// JavaScript References VS Copying

// Strings, numbers, and booleans are copied by value
// let age = 100;
// let age2 = age;
// age = 200;
// console.log(age, age2); // 200, 100

// Arrays are assigned by reference
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players; // both point to the same array

console.log(players, team);

// Ways to make a true copy of an array:
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players]; // spread syntax
team4[3] = 'heeee hawww';
console.log(team4);

const team5 = Array.from(players);

// Objects are also assigned by reference
const person = {
  name: 'Wes Bos',
  age: 80
};

// Object.assign for shallow copy with overrides
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

// Object spread (modern alternative to Object.assign)
// const cap3 = { ...person };

// WARNING: these are only 1 level deep (shallow copies)
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

console.clear();
console.log(wes);

const dev = Object.assign({}, wes); // shallow copy

// structuredClone is the modern way to deep clone (replaces the JSON trick)
const dev2 = structuredClone(wes);
