import { products } from "../data/products.js";
import { AddToCartButtons } from "../events/addToCartEvent.js";

function getId(){
    const hash = window.location.hash.replace("#", "").trim();
    return Number(hash)
}

function ErrorBanner(){
    return  `
        <article>
            <hgroup>
                <h3>Product not found</h3>
                <p>Check the product id</p>
            </hgroup>
        </article>
    `
}

function ProductDetail(product){
    // console.log(product)
    return `
        <div class="product-detail-container">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h1>${product.title}</h1>
                <p class="category">${product.category}</p>
                <p>${product.description}</p>
                <p><span class="yellow">★<span> <span class="black">${product.rating}</spam></p>
                <p class="price">₹${product.price}</p>
                <div class="product-buttons">
                    <button class="addCardBtn" data-id="${product.id}">Add to Cart</button>
                    <a href="/buy-now#${product.id}" class="buyBtnLink">Buy Now</a>
                </div>

            </div>
        </div>
    `
}

export default function render(){
    const id = getId()

    const product = products.find((product) => id === product.id)

    if(!product){
        document.getElementById("app").innerHTML = ErrorBanner()

    }else{
    document.getElementById("app").innerHTML = ProductDetail(product)
    }

    AddToCartButtons();
}