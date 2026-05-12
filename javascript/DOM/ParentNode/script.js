//select a list item using data attribute
const selectedItemEl = document.querySelector('[data-item="fruit"]');

const parentListEl = selectedItemEl.parentNode;
const grandParentEL = parentListEl.parentNode;
const grandgrandParentEl = grandParentEL.parentNode;
console.log(grandgrandParentEl);
