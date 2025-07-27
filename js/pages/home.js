import { products } from "../data/products.js"
import { AddToCartButtons } from "../events/addToCartEvent.js"

function displayCards(product){    
    return `
            <article>
                <div class="product-card">
                    <a href="/productDetails#${product.id}" >
                        <img src="${product.image}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                    </a>
                    <p><span class="yellow">★<span> <span class="black">${product.rating}</spam></p>
                    <h3>₹${product.price}</h3>
                    <button class="addCardBtn" data-id="${product.id}">Add to Cart</button>
                </div>
            </article>
    `
}

function ProductCard(products){
    // console.log(products)
    const productsCard = products.map(displayCards)
    return productsCard.join("")
}

export default function render(){
    document.getElementById("app").innerHTML = ProductCard(products)

    AddToCartButtons()
}