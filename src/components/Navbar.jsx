import React from "react";
import "./Navbar.css";

function Navbar({
  onMenuClick,
  cartCount,
  onCartClick,
}) {
  return (
    <nav className="navbar">

      <div
        className="logo"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <span className="logo-icon">
          🍴
        </span>

        <span>ZAVORA</span>
      </div>

      <div className="nav-links">

        <a href="#home">
          Home
        </a>

        <a
          href="#menu"
          onClick={(e) => {
            e.preventDefault();
            onMenuClick();
          }}
        >
          Menu
        </a>

        <a href="#about">
          About
        </a>

        <a href="#contact">
          Contact
        </a>

      </div>

      <button
        className="cart-btn"
        onClick={onCartClick}
      >
        🛒 Cart

        {cartCount > 0 && (
          <span className="cart-count">
            {cartCount}
          </span>
        )}
      </button>

    </nav>
  );
}

export default Navbar;