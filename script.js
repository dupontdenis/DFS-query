import { dfsE, dfsN, querySelectorAll } from "./search.js";

const addStyle = (elt) => {
  if (elt != document.body)
    elt.classList.add("selected")
}
dfsE(addStyle);


const allP = querySelectorAll("p:nth-child(2n+1)");
for (const element of allP) {
  element.classList.add("selected")
}

// const allEm = querySelectorAll("EM");
// console.log(allEm)


const text = "second"
const find = (node) => {
  // console.log(node.data);
  if (node.nodeType == document.TEXT_NODE && node.data.indexOf(text) > -1) {
    node.parentElement.classList.add("find")
  }
}

dfsN(find)