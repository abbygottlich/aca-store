"use strict";

function searchFunction() {
  // empty array created to hold items found in the search
  let foundItems = [];
  // loop over each item and index in products.js
  products.forEach((item, index) => {
    // split each item's name into individual words
    let nameArray = item.name.split(" ");
    // filter through all of the itemNames that you split
    nameArray.filter(itemName => {
      // variable created that looks into the HTML and finds the element with id="search"
      // the element with id="search" is the input field
      // using .value gives us what the user typed into the input field
      let searchedItem = document.getElementById("search").value;
      // if whatever the user typed is equal to any of the itemNames that you filtered through
      if (searchedItem === itemName) {
        // push the item.name of each ItemName into the foundItems array
        foundItems.push(item.name);
      }
    });
  });
  // look into the HTML and find the element with id="searchedItems"
  // the element with id="searchedItems" is an unordered list
  // map over each item and index in the foundItems array
  return (document.getElementById("searchedItems").innerHTML = foundItems
    .map((item, index) => {
      // return each item as a list item
      return `<li>${item}</li>`;
    })
    // .join gets rid of the comma that is automatically put between each thing being mapped over
    .join(""));
}
