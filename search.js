export const dfsE = (action, elt = document.body) => {
  action(elt);
  Array.from(elt.children, childElement => dfsE(action, childElement));
}

export const dfsN = (action, elt = document.body) => {
  action(elt);
  Array.from(elt.childNodes, childNode => dfsN(action, childNode));
}

export const querySelectorAll = (selector, elt = document.body) => {
  const query = [];

  const find = (elt) => {
    if (elt.matches(selector)) {
      query.push(elt)
    }
  }
  dfsE(find, elt)

  return query;
}




