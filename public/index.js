"use strict";

// ---------------------------------- display products on page ----------------------------------
// When the window loads, create an empty array called 'allItems'.
// Loop through the products list, and forEach item and index, push
// the item name plus a dash plus the item description into the allItems array.
// Return the allItems array and map over it.
// For every item and index in the allItems array, return the item as a <li>
// plus the Details button plus the Add To Cart button.
// Use .join("") to eliminate the commas between each <li>.
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
        `<button onclick="showDetails(${index})">Details</button>` +
        " " +
        `<button onclick="addToCart(${index})">Add To Cart</button>`
      );
    })
    .join(""));
};

// ---------------------------------- search products ----------------------------------
// Create an empty array called foundItems to hold items found in the search.
// Loop over each item and index in products.js.
// Split each item's name into individual words and store them in the nameArray.
// Filter through all of the itemNames that you split.
// Create a variable called searchedItem that equals the value of the input field (what the user types).
// If whatever the user typed is equal to any of the itemNames that you filtered through,
// push the item.name of each ItemName into the foundItems array.
function searchFunction() {
  let foundItems = [];
  products.forEach((item, index) => {
    let nameArray = item.name.split(" ");
    nameArray.filter(itemName => {
      let searchedItem = document.getElementById("search").value;
      if (searchedItem === itemName) {
        foundItems.push(index);
      }
    });
  });
  // Look into the HTML and find the element with id="searchedItems".
  // The element with id="searchedItems" is a div.
  // Map over each item and index in the foundItems array.
  // Create a variable 'product' and set it equal to the product's name.
  // Return each product as a list item plus a Details button plus an Add To Cart button.
  // Use .join("") to get rid of the commas that are automatically put between each thing being mapped over
  return (document.getElementById("searchedItems").innerHTML = foundItems
    .map((itemNum, i) => {
      let product = products[itemNum].name;
      return (
        `<li>${product}</li>` +
        " " +
        `<button onclick="showDetails(${itemNum})">Details</button>` +
        " " +
        `<button onclick="addToCart(${itemNum})">Add To Cart</button>`
      );
    })
    .join(""));
}

// ---------------------------------- show item details ----------------------------------
// Create a variable called 'product' and set it equal to the product itself from the products.js file.
// Return the product's description to the searchedItems div in the HTML.
function showDetails(index) {
  let product = products[index];
  return (document.getElementById("searchedItems").innerHTML = `<div>${
    product.description
  }
    </div>`);
}

// ---------------------------------- put items in shopping cart ----------------------------------
// Create an empty array called 'cart'.
// Create a variable called 'product' and set it equal to the product's name.
// Push the product whose 'Add To Cart' button was clicked into the cart array.
// Use sessionStorage to keep everything in the cart even after the page refreshes.
let cart = [];
function addToCart(itemNum) {
  let product = products[itemNum].name;
  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  // console.log(cart);
}

// --------------------------------- show shopping cart ----------------------------------
// Create a variable called 'product' and set it equal to the product's name.
// If the cart is empty (null), return 'Your cart is empty.' string to the cart div in the HTML.
// Otherwise, loop through the items in the cart.
// ForEach item that's in the cart, return its name to the cart div as a <li>.
function viewCart() {
  if (cart === null) {
    let item = products[i];
    return (document.getElementById(
      "cart"
    ).innerHTML = `<div>Your cart is empty.</div>`);
  } else {
    cart.forEach(item => {
      return (document.getElementById("cart").innerHTML = `<li>${cart}</li>`);
    });
  }
  console.log(cart);
}
