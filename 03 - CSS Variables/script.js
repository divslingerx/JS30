const inputs = document.querySelectorAll('.controls input');

// Update the CSS custom property matching the input's name attribute
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));
