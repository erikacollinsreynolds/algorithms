// DOM Manipulation
// Five different ways to select DOM elements

// getElementById()
// Return that one item
const title = document.getElementById('id-goes-here');

// getElementByClassName()
// Returns array-liek object of all those class items found
const listItems = document.getElementsByClassName('class-name-goes-here');

// getElementByTagName()
// Returns array-like (NodeList) object of all those class items found
const moreListItems = document.getElementsByClassName('tag-name-goes-here'); // Ex: 'li' or 'h1'

// querySelector()
// Can select tags, ids, or classes (I think...)
// Returns the FIRST item that matches that selector
const container = document.querySelector('div');

// querySelectorAll()
// Returns all items that match that selector
const containers = document.querySelector('div');