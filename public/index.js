"use strict";

function searchFunction() {
  let foundItems = [];
  products.forEach((item, index) => {
    // console.log(item, index);
    let nameArray = item.name.split(" ");
    nameArray.filter(itemName => {
      let searchedItem = document.getElementById("search").value;
      if (searchedItem === itemName) {
        foundItems.push(item.name);
      }
    });
  });
  return (document.getElementById("searchedItems").innerHTML = foundItems
    .map((item, index) => {
      return `<li>${item}</li>`;
    })
    .join(""));
}
