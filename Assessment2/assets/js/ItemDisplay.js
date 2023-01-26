class ItemDisplay {
  constructor(el, description, price, id){
    this.node = document.createElement('div');
    this.node.setAttribute('id', id);
    const descP = document.createElement('p');
    const priceP = document.createElement('p');
    descP.innerText = description;
    priceP.innerText = price;

    const button = document.createElement('button');
    button.setAttribute('class', 'purchase');
    button.innerText = 'Purchase this Item'

    this.node.appendChild(descP);
    this.node.appendChild(priceP);
    this.node.appendChild(button);
    el.appendChild(this.node);
  }
}
