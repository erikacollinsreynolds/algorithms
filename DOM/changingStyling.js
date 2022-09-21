// DOM Manipulation

// Changing the styling of the title
const title = document.querySelector('#main-heading'); 

// Example of in-line styling (only works on single element)
  // If you want it applied to multiple items, you need to loop thru and apply the styling each time
// [element you want to style].style.[css property, but use camelcase NOT snakecase] = [what you want it assigned to]
title.style.color = 'red';

// Example of applying styling to multiple elements
const listItems = document.querySelectorAll('list-items');

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = '5rem';
}

