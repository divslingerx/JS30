// Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.some() - is at least one person 19 or older?
const currentYear = new Date().getFullYear();
const isAdult = people.some(person => (currentYear - person.year) > 19);
console.log('Is at least one adult?', isAdult);

// Array.prototype.every() - is everyone 19 or older?
const allAdults = people.every(person => (currentYear - person.year) > 19);
console.log('Is everyone an adult?', allAdults);

// Array.prototype.find() - find the comment with ID 823423
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex() - delete the comment with ID 823423
const index = comments.findIndex(comment => comment.id === 823423);
// Create a new array without the found comment using spread
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
console.log(newComments);
