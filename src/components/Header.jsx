import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "20px",
        backgroundColor: "#0f172a",
        color: "#fff",
      }}
    >
      {/* Logo / Title */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <h1 style={{ margin: 0, fontSize: "28px" }}>EXTRA SUPERMARKET</h1>
        <p style={{ margin: 0, fontSize: "14px", opacity: 0.8 }}>
          THE BEST PLACE TO DO YOUR SHOPPING
        </p>
      </div>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;