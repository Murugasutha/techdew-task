# 🛍️ Simple JS E-Commerce Store

A modern single-page E-Commerce application built using **Vanilla JavaScript**, following modular design principles. This project demonstrates core frontend concepts like SPA routing, localStorage-based cart management, responsive design, and theme switching, all without any frameworks.

---

## 🚀 Features

-  **Product Listing Page**
  --- View all available products with title, price, and quick actions.
-  **Product Detail Page**
  --- Detailed view of a selected product with "Add to Cart" and "Buy Now" options.
-  **Shopping Cart**
  --- View items added to cart, remove items, and see live total.
-  **Multi-Step Buy Now Flow**
  --- Simulated checkout process with step-by-step user inputs.
-  **Dark/Light Theme Switcher**
  --- Toggle between themes with persistent preference using `localStorage`.
-  **SPA Navigation**
  --- Fast, client-side routing using a custom `AtomRouter` class.
-  **LocalStorage Cart Persistence**
  --- Cart state is retained across sessions.
-  **Modular Folder Structure**
  --- Clean separation of components by purpose.

---

## 📂 Project Structure

```
Directory structure:
└── murugasutha-techdew-task/
    ├── index.html
    ├── style.css
    └── js/
        ├── app.js
        ├── routes.js
        ├── data/
        │   └── products.js
        ├── events/
        │   ├── addToCartEvent.js
        │   └── updateCardBadge.js
        ├── lib/
        │   ├── atom-router.js
        │   └── theme-switcher.js
        └── pages/
            ├── buyNow.js
            ├── cart.js
            ├── details.js
            └── home.js

```
---

## 🖼️ Screenshot

Here is a preview of the Product Listing Page:

![ProductListing Page Screenshot](./techdrew-task/screenshots/ProductListing-light.png)
![ProductListing Page Screenshot](./techdrew-task/screenshots/ProductListing-dark.png)

Product Detail Page

![Product Detail Page Screenshot](./techdrew-task/screenshots/ProductDetail-light.png)
![Product Detail Page Screenshot](./techdrew-task/screenshots/ProductDetail-dark.png)

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Murugasutha/techdrew-task.git
cd techdrew-task
```
### 2. Open in Browser
You can open the index.html directly in your browser OR use a local server:

## Option A: Directly open
Just double-click index.html.

## Option B: Using VS Code Live Server
#If you have Live Server extension installed:
```bash
Right-click index.html > "Open with Live Server"
```

---

### 🧠 Tech Stack
- HTML5 & CSS3 — Markup and styling
- Vanilla JavaScript — SPA behavior, routing, and logic
- localStorage — Cart data persistence
- Custom SPA Router — No frameworks

---

### 📌 Known Limitations
- No backend or database — all data is stored in-memory or localStorage.
- Cart quantity and stock logic are not enforced.
- Buy Now flow is a simulation — does not store actual orders.

---

### 🧑‍💻 Author
Sutha Kailasam
Frontend Developer

---

### 📄 License
This project is open-source and available under the MIT License.

---
