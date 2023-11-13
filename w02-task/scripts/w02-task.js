/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Nancy Stoddart';
let currentYear = '2023';
let profilePicture = 'images/nancyStoddart.jpeg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoriteFoods = ['pizza', 'ravioli', 'strawberries', 'chicken alfredo', 'orange chicken', 'tacos', 'quesadillas'];
foodElement.textContent = `${favoriteFoods}`;
oneMore = 'queso';
favoriteFoods.push(oneMore);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift()
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;



