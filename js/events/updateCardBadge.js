export function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  badge.textContent = cart.length;
  badge.style.display = cart.length > 0 ? "inline-block" : "none";
}
