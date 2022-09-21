// DOM Manipulation
// Traverse the DOM

// NOTES:
// Elements are a type of node. The distinction matters though. 
const html = document.documentElement;
console.log(html.parentElement); //returns null (trying to grab a specific type of node, doesn't work here)
console.log(html.parentNode); //returns #document (grabs node regardless of type of node)

// Parent Node Traversal
let ul = document.querySelector('ul');
//TWO OPTIONS
console.log(ul.parentElement);
console.log(ul.parentNode);

// What if we want the grandparent node? Chain the properties!
console.log(ul.parentElement.parentElement);
console.log(ul.parentNode.parentNode);


// Child Node Traversal
console.log(ul.childNodes); //returns list of nodes 
console.log(ul.firstChild); //returns text node
console.log(ul.lastChild); //returns text node
console.log(ul.children); //returns all element nodes 
console.log(ul.firstElementChild); //returns first child element
console.log(ul.lastElementChild); //returns last child element


// Sibling Node Traversal
console.log(ul.previousSibling); //returns previous node
console.log(ul.nextSibling); // returns next node
console.log(ul.previousElementSibling); // returns previous element sibling
console.log(ul.lastElementChild); // returns next element sibling
