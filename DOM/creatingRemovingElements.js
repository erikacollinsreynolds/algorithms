// DOM Manipulation

// Grab the element where you want something added
const ul = document.querySelector('ul');

// Create the element you want to insert somewhere
const li = document.createElement('li');

// Insert the li in the ul
ul.append(li);

// Modify the text in the li
// Three ways to modify text: innerText, textContent, innerHTML (security issues with this one though)
li.innerText = 'X-men';

// Modifying Attributes & Classes
li.setAttribute('id', 'main-heading');
li.classList.add('list-items');

// Remove Attributes & Classes
li.removeAttribute('id');

const title = document.querySelector('main-heading');
title.getAttribute('id'); // Would show the attribute

// See if something includes a specific class
li.classList.contains('list-items') // Would return true

// Remove elements
li.remove();
