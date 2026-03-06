// Array Cardio Day 1

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// 1. Filter inventors born in the 1500s
const results = inventors.filter(inv => inv.year >= 1500 && inv.year <= 1599);
console.table(results);

// 2. Array of inventors' full names
const full = inventors.map(inv => `${inv.first} ${inv.last}`);
console.log(full);

// 3. Sort inventors by birthdate, oldest to youngest
const sorted = inventors.sort((a, b) => a.year - b.year);
console.table(sorted);

// 4. Total years all inventors lived
const totalAge = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log('totalAge', totalAge);

// 5. Sort inventors by years lived
const oldest = inventors.sort((a, b) => {
  return (b.passed - b.year) - (a.passed - a.year);
});
console.table(oldest);

// 6. List of Boulevards in Paris containing 'de'
// (run on https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris)
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//   .map(link => link.textContent)
//   .filter(streetName => streetName.includes('de'));

// 7. Sort people alphabetically by last name
const sortLast = inventors.sort((a, b) => a.last.localeCompare(b.last));
console.table(sortLast);

// 8. Count instances of each item
const data = ['car', 'car', 'pogo stick', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const transportation = data.reduce((obj, item) => {
  obj[item] = (obj[item] || 0) + 1;
  return obj;
}, {});
console.table(transportation);
