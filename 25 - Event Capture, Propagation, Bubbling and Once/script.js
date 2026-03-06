const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText() {
  console.log(this.classList.value);
}

// capture: false = bubbling phase (default), once: true = auto-removes after first fire
divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));

button.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});
