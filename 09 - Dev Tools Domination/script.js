const dogs = [
  { name: 'roof', age: 7 },
  { name: 'ruff', age: 5 },
  { name: 'doggomega', age: 30 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
const world = 'world';
console.log(`Hello! I am ${world}`);

// Styled
console.log('%c I am some great text', 'font-size:20px');

// Warning
console.warn('OH NOOOO!');

// Error
console.error('you dun goofed!');

// Info
console.info('crocodiles eat 3-4 people per year');

// Testing
console.assert(1 === 1, 'that is wrong!');

// Clearing
console.clear();

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old in dog years`);
  console.groupEnd(`${dog.name}`);
});

// Counting
console.count('W');

// Table
console.table(dogs);
