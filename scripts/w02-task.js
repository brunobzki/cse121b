/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Bruno Panzacchi";
let currentYear = new Date().toLocaleDateString('en-us', {year:"numeric"});
let profilePicture = "images/bruno.png";


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerHTML = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);



/* Step 5 - Array */

let favoriteFood = ["Hamburger"," Asado"," Ravioles"," Gnocchi"," Bondiola"," Milanesa"]
foodElement.innerHTML = `<br>${favoriteFood}`;

favoriteFood.push(' Soup')
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift()
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop()
foodElement.innerHTML += `<br>${favoriteFood}`;
