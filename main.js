// catch DOM elements
const button = document.getElementById("button");
const price = document.getElementById("price");
const total = document.getElementById("total");

// state or data
const productPrice = 5000;
let totalPrice = 0;

// set price initially
price.innerText = `৳ ${productPrice}`;
total.innerText = "Total: ৳ 0";

button.addEventListener("click", () => {
  totalPrice += productPrice;

  // upda ui
  total.innerText = `Total: ৳ ${totalPrice}`;
});
