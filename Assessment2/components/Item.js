import Element from './Element.js';

function Item(data) {
  // onclick handler to send patch req to update object
  const updateItem = async (e) => {
    e.preventDefault();
    // send fetch
    const response = await fetch(`/items/${data.item_id}`, {method: 'PATCH'}).then(response => response.json());
    console.log(response);
    // if response is data object, remove node from page
    if (typeof response !== 'string') {
      const item = document.querySelector(`#item${data.item_id}`);
      item.remove();
    }
  };

  // create div
  const item = Element('div', '', {class: 'item', id: `item${data.item_id}`});
  // create details
  const desc = Element('p', data.description);
  const price = Element('p', `$${data.price}`);
  // create button and add click handler
  const purchase = Element('button', 'Purchase this item', {class: 'purchase'});
  purchase.addEventListener('click', updateItem);

  // append children to div
  item.append(desc, price, purchase);

  return item;
}

export default Item;