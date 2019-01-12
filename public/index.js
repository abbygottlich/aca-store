"use strict";

// -------------- display products on page --------------
window.onload = function displayProducts() {
  let allItems = [];
  products.forEach((item, index) => {
    allItems.push(item.name + " - " + item.description);
  });
  return (document.getElementById("itemList").innerHTML = allItems
    .map((item, index) => {
      return (
        `<li>${item}</li>` +
        " " +
        `<button onclick="showDetails(${index})">Details</button>`
      );
    })
    .join(""));
};

// -------------- search products --------------
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
        foundItems.push(index);
      }
    });
  });
  // look into the HTML and find the element with id="searchedItems"
  // the element with id="searchedItems" is an unordered list
  // map over each item and index in the foundItems array
  return (document.getElementById("searchedItems").innerHTML = foundItems
    .map((itemNum, i) => {
      let product = products[itemNum].name;
      console.log(product);
      // return each item as a list item
      return (
        `<li>${product}</li>` +
        " " +
        `<button onclick="showDetails(${itemNum})">Details</button>`
      );
    })
    // .join gets rid of the comma that is automatically put between each thing being mapped over
    .join(""));
}

// -------------- show item details --------------
function showDetails(index) {
  let product = products[index];
  return (document.getElementById("searchedItems").innerHTML = `<div>${
    product.description
  }
    </div>`);
}

// -------------- count items in shopping cart --------------
// function cartCounter() {
//   if(cart === null){
//     return document.getElementById("counter").innerHTML = 0
//   } else {
//     document.getElementById("counter").innerHTML = cart.length
//   }
// }

// -------------- put items in shopping cart --------------
// let cart = [];
// function addToCart(item) {
//   cart.push(item);
//   sessionStorage.setItem("cart", JSON.stringify(cart));
// }

// -------------- show shopping cart --------------
// function showCart() {
//   displayProducts(cart);
// }
