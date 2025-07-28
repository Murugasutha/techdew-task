import { updateCartBadge } from "../events/updateCardBadge.js";

function getCartItems(){
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function displayCart(item) {
  return `
    <div class="cart-item">
        <div class="cart-item-image">
            <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="cart-item-info">
            <h3>${item.title}</h3>
            <p>Price: ₹${item.price}</p>
        </div>
        <div id="cart-summary" class="cart-summary">
            <a href="#/buy-now#${item.id}" class="buyBtnLink">Buy Now</a>
        </div>

        <button class="removeBtn" data-id="${item.id}">Remove</button>
    </div>
  `;
}


function displayTotalAmount(cartItems){
    let total = cartItems.reduce((sum,item) => sum + item.price, 0)
    return `
    <div class="cart-total">Total: ₹${total}</div>
  `;

}

function attachRemoveButtonEvents() {
  const removeButtons = document.querySelectorAll(".removeBtn");

  removeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const itemId = btn.getAttribute("data-id");
      let cart = getCartItems();

      cart = cart.filter(item => item.id != itemId);

      localStorage.setItem("cart", JSON.stringify(cart));
        updateCartBadge();
      render();
    });
   
  });
}


function CartPage() {
  const cartItems = getCartItems();
  let cartHtml = `<div class="cart-wrapper"><h1>Your Shopping Cart</h1>`;

  if (cartItems.length === 0) {
    cartHtml += `
      <p>Your cart is empty</p>
      <div class="cart-total">Total: ₹0</div>
    </div>`;
    return cartHtml;
  }

  cartHtml += cartItems.map(displayCart).join("");
  cartHtml += displayTotalAmount(cartItems);
  cartHtml += `</div>`;

  return cartHtml;
}

export default function render(){
    document.getElementById("app").innerHTML = CartPage()

    attachRemoveButtonEvents();
}