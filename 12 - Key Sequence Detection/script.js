const pressed = [];
const secretCode = 'tayloriscool';

window.addEventListener('keydown', (e) => {
  pressed.push(e.key);
  // Trim the array to only keep as many keys as the secret code length
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('') === secretCode) {
    alert('YOU WON');
  }
});
