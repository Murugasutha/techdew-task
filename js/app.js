import { updateCartBadge } from "./events/updateCardBadge.js";
import themeSwitcher from "./lib/theme-switcher.js";
import router from "./routes.js";

router.start()


function handleTheme(){
    themeSwitcher();
    updateCartBadge();
}


document.addEventListener("DOMContentLoaded", handleTheme);