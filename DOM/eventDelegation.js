// DOM Manipulation

// Benefits of Event Delegation:
// 1. It allows users to append a  SINGLE event listener to a parent element that adds it to all of its present descendants

// NOT DRY
document.querySelector('#football').addEventListener('click', function(e) {
  console.log('football is clicked');

  const target = e.target;

  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgrey'
  };

})

document.querySelector('#basketball').addEventListener('click', function(e) {
  console.log('basketball is clicked');

  const target = e.target;

  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgrey'
  };

})

document.querySelector('#tennis').addEventListener('click', function(e) {
  console.log('tennis is clicked');

  const target = e.target;

  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgrey'
  };

})

document.querySelector('#golf').addEventListener('click', function(e) {
  console.log('golf is clicked');

  const target = e.target;

  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgrey'
  };

})

// DRY -- uses parent element to delegate the event
document.querySelector('#sports').addEventListener('click', function(e) {

  console.log(e.target.getAttribute('id') + ' is clicked!';
  
  const target = e.target;

  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgrey';
  };

});



// Another benefit of Event Delegation
// Benefit 2. It allows users to append a  SINGLE event listener to a parent element that adds it to all of its present AND FUTURE DESCENDANTS that match a selector

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);

