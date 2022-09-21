// DOM Manipulation
// Event Listeners

// Click Event
const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
  alert('I also love JavaScript!')
};

buttonTwo.addEventListener('click', alertBtn);



// Mouseover Event
const buttonThree = document.querySelector('.btn-3');

function changeColor() {
  buttonThree.style.backgroundColor = 'blue';
};

buttonThree.addEventListener('mouseover', changeColor);


// Show Hidden Text on Click / Reveal Event
const revealBtn = button.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
  if (hiddenContent.classList.contains('reveal-btn')) {
    hiddenContent.classList.remove('reveal-btn')
  } else {
    hiddenContent.classList.add('reveal-btn')
  }
}

revealBtn.addEventListener('click', revealContent);