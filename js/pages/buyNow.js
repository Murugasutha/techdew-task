import { products } from "../data/products.js";

function getId(){
    const hash = window.location.hash.replace("#","").trim();
    return Number(hash)
}

function getProduct(){
    const productId = getId()
    const product = products.find((product) => productId === product.id)
    return product;
}

function displayProduct(){
    const product = getProduct()
    return `
        <div class="product-details">
      <h2>Product Name: ${product.title}</h2>
      <p>${product.description}</p>
      <p><strong>₹${product.price}</strong></p>
    </div>
    `
}
function customerDetailForm(){
    return `
        <div id="step1" class="step-section active">
            <h3>1. Customer Details</h3>
            
            <input type="text" placeholder="Enter your full name" id="customer-name" required/>
            <input type="email" placeholder="Email Address" id="customer-email" required/>
            <input type="text" placeholder="Phone Number" id="customer-phno" required/>
        </div>
    `
}

function paymentMethod(){
    return `
        <div id="step2" class="step-section">
            <h3>Payment Method</h3>
            <label><input type="radio" name="payment" /> UPI</label>
            <label><input type="radio" name="payment" /> Credit Card</label>
            <label><input type="radio" name="payment" /> Cash On Delivery</label>
        </div>
    `
}

function productInvoice() {
    const product = getProduct()
  return `
    <div id="step3" class="step-section invoice">
      <h3>3. Product Invoice</h3>
      <p><strong>Product:</strong> ${product.title}</p>
      <p>Quantity: 1</p>
      <p>Shipping cost: ₹200</p>
      <p><strong>Total Price:</strong> ₹${product.price + 200}</p>
    </div>
  `;
}


function completePurchase() {
  document.querySelector(`#step4`).classList.remove("active");

  document.querySelector(`#step5`).classList.add("active");

  document.querySelector(".navigation").style.display = "none";
}

function ConfirmPurchase(){
    return `
        <div id="step4" class="step-section">
            <h3>4. Confirm Purchase</h3>
            <button class="buyNow" onclick="completePurchase()">Buy Now</button>
        </div>
    `;
}


function SuccessMessage(){
    return `
        <div id="step5" class="step-section">
        <h3>Purchase Successful!</h3>
        <p>Thank you for your order!</p>
        </div>
    `
}

function validateStep(step) {
  if (step === 1) {
    const name = document.getElementById("customer-name").value.trim();
    const email = document.getElementById("customer-email").value.trim();
    const phone = document.getElementById("customer-phno").value.trim();

    if (!name || !email || !phone) {
      alert("Please fill in all customer details.");
      return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Phone number must be 10 digits.");
      return false;
    }
  }

  if (step === 2) {
    const paymentSelected = document.querySelector('input[name="payment"]:checked');
    if (!paymentSelected) {
      alert("Please select a payment method.");
      return false;
    }
  }

  return true;
}


let currentStep = 1;

const totalSteps = 5;

function changeStep(step) {
  if (step === 1) {
    if (!validateStep(currentStep)) return;
  }

  document.querySelector(`#step${currentStep}`).classList.remove("active");

  currentStep += step;

  if (currentStep < 1) currentStep = 1;
  if (currentStep > totalSteps) currentStep = totalSteps;

  document.querySelector(`#step${currentStep}`).classList.add("active");

  document.getElementById("prevBtn").disabled = currentStep === 1;
  document.getElementById("nextBtn").style.display = currentStep === 4 ? "none" : "inline-block";
}


function BuyNow(){

    let html = `<div class="buy-container">`
    html += displayProduct()
    html += customerDetailForm()
    html += paymentMethod()
    html += productInvoice()
    html += ConfirmPurchase()
    html += SuccessMessage()

    html += `
            <div class="navigation">
                <button id="prevBtn" onclick="changeStep(-1)" disabled>Previous</button>
                <button id="nextBtn" onclick="changeStep(1)">Next</button>
            </div>
        </div>
    `
    return html;
}

export default function render(){
    document.getElementById("app").innerHTML = BuyNow();

    window.changeStep = changeStep;
    window.completePurchase = completePurchase;
}