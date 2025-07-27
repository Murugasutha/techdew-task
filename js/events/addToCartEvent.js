import { products } from "../data/products.js";
import { updateCartBadge } from "./updateCardBadge.js";

function addToCart(productId){
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const isAlreadyInCart = existingCart.some((product) => productId === product.id)

    if(isAlreadyInCart){
        alert("Already Added!")
        return;
    }

    const selectedProduct = products.find((product) => productId === product.id);
    if(selectedProduct){
        existingCart.push(selectedProduct)
        localStorage.setItem("cart", JSON.stringify(existingCart));
        updateCartBadge();
        alert("Product added to cart!")
    } else{
        alert("Error..")
    }

}

function handleClick(event){
        event.preventDefault();
        const productId = event.currentTarget.dataset.id;
        addToCart(Number(productId))
}

export function AddToCartButtons(){
    const button = document.querySelectorAll(".addCardBtn");

    button.forEach((btn) =>{
        btn.addEventListener("click", handleClick)
    })
}