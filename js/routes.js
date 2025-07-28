import {AtomRouter} from "./lib/atom-router.js"
import home from "./pages/home.js"
import details from "./pages/details.js"
import cart from "./pages/cart.js"
import buyNow from "./pages/buyNow.js"

const router = new AtomRouter({rootid: "app", debug: false})

router.add([
    {url: "./", handler: home},
    {url:"#/productDetails", handler: details},
    {url: "#/cart-items", handler: cart},
    {url: "#/buy-now", handler: buyNow},
])

export default router;