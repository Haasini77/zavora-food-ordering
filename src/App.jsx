import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CravingMood from "./components/CravingMood";
import MenuSection from "./components/MenuSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ================================
  // CART
  // ================================

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ================================
  // CHECKOUT
  // ================================

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // ================================
  // CATEGORY SELECT
  // ================================

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    setTimeout(() => {
      document.getElementById("menu")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  // ================================
  // MENU NAVBAR CLICK
  // ================================

  const handleMenuClick = () => {
    setSelectedCategory("All");

    setTimeout(() => {
      document.getElementById("menu")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  // ================================
  // CART COUNT
  // ================================

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ================================
  // OPEN CHECKOUT
  // ================================

  const handleCheckout = () => {
    // Close cart
    setIsCartOpen(false);

    // Open checkout
    setIsCheckoutOpen(true);

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ================================
  // ORDER PLACED
  // ================================

  const handleOrderPlaced = () => {
    /*
      IMPORTANT:
      Don't clear cart here.

      Checkout confirmation screen
      still needs cartItems to display:

      - Number of items
      - Total amount
    */
  };

  // ================================
  // CLOSE CHECKOUT
  // ================================

  const handleCloseCheckout = () => {
    // Close checkout page
    setIsCheckoutOpen(false);

    // Now clear the cart
    setCartItems([]);

    // Go back to menu
    setTimeout(() => {
      document.getElementById("menu")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  // ================================
  // RETURN UI
  // ================================

  return (
    <div className="app">

      {/* ============================
          NAVBAR
      ============================ */}

      <Navbar
        onMenuClick={handleMenuClick}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* ============================
          CHECKOUT PAGE
      ============================ */}

      {isCheckoutOpen ? (

        <Checkout
          cartItems={cartItems}
          onClose={handleCloseCheckout}
          onOrderPlaced={handleOrderPlaced}
        />

      ) : (

        <>

          {/* ============================
              HERO
          ============================ */}

          <Hero />

          {/* ============================
              CRAVING MOOD
          ============================ */}

          <CravingMood
            onCategorySelect={handleCategorySelect}
          />

          {/* ============================
              MENU
          ============================ */}

          <MenuSection
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />

          {/* ============================
              ABOUT
          ============================ */}

          <AboutSection />

          {/* ============================
              CONTACT
          ============================ */}

          <ContactSection />

          {/* ============================
              FOOTER
          ============================ */}

          <footer>
            <h3>ZAVORA</h3>

            <p>
              Good food. Great moments.
            </p>

            <p>
              © 2026 Zavora · Made with ❤️ for food lovers
            </p>
          </footer>

        </>

      )}

      {/* ============================
          CART SIDE PANEL
      ============================ */}

      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

    </div>
  );
}

export default App;