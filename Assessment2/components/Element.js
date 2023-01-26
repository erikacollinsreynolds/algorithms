// create basic html template function for making DOM elements
function Element(type, content, attributes = {}) {
  const node = document.createElement(type);
  node.innerHTML = content;
  for (const name in attributes) {
    node.setAttribute(name, attributes[name]);
  }

  return node;
}

export default Element;