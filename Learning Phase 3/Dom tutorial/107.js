// get and set attribute
const link = document.querySelector('a');
console.log(link.getAttribute('href').slice(1));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
console.log(link.getAttribute('href'));

const inputElement = document.querySelector('.form-todo input');   
console.log(inputElement.getAttribute('type'));