import Item from './components/Item.js';

// retrieve store items and render to page
const fetchItems = async () => {
  // hook items into store.html and render each item
  const itemList = document.querySelector('#item-list');
  const items = await fetch('/items').then(response => response.json());

  items.forEach(data => {
    // only create if not already purchased
    if (!data.purchased) {
      const item = Item(data);
      itemList.prepend(item);
    }
  });
};

// assign new click handler to list item button
const listItemHandler = async (e) => {
  e.preventDefault();
  // retrieve input data
  const description = document.querySelector('#item').value;
  const price = document.querySelector('#price').value;
  // check data types
  if (!Number(price)) {
    document.querySelector('#price').value = '';
    console.log('Price must be an integer');
    return;
  }
  // send in fetch
  const data = await fetch('/items', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      description, price
    })
  }).then(response => response.json());
  console.log(data);
  // if data object is returned, create new node and prepend to item list
  if (typeof data !== 'string') {
    const itemList = document.querySelector('#item-list');
    itemList.prepend(Item(data));
  }
  // clear form
  document.querySelector('#item').value = '';
  document.querySelector('#price').value = '';
};

// hook handler to existing button
const listItem = document.querySelector('#list-item');
listItem.addEventListener('click', listItemHandler);

fetchItems();

