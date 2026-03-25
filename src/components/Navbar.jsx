import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      {/* Shop link */}
      <NavLink to="/shop" className="nav-link">
        Shop
      </NavLink>

      {/* Cart link with badge */}
      <NavLink to="/cart" className="cart-link">
        Cart
        {cartCount > 0 && (
          <span className="cart-badge" aria-label={`Cart items: ${cartCount}`}>
            {cartCount}
          </span>
        )}
      </NavLink>
    </nav>
  );
}

export default Navbar;