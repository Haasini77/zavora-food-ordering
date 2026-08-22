import React from "react";
import "./Cart.css";

function Cart({
  cartItems,
  setCartItems,
  isOpen,
  onClose,
  onCheckout,
}) {
  const increaseQuantity = (item) => {
    setCartItems((items) =>
      items.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      )
    );
  };

  const decreaseQuantity = (item) => {
    setCartItems((items) =>
      items
        .map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const removeItem = (item) => {
    setCartItems((items) =>
      items.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div
        className="cart-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="cart-header">
          <div>
            <span className="cart-label">
              ZAVORA CART
            </span>

            <h2>
              Your cravings 🛒
            </h2>
          </div>

          <button
            className="cart-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              🛒
            </div>

            <h3>
              Your cart is empty
            </h3>

            <p>
              Looks like you haven't added
              anything delicious yet.
            </p>

            <button
              className="start-shopping-btn"
              onClick={onClose}
            >
              Explore Menu →
            </button>
          </div>
        ) : (
          <>
            {/* CART ITEMS */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div
                  className="cart-item"
                  key={item.id}
                >
                  <div className="cart-item-image">
                    {item.emoji}
                  </div>

                  <div className="cart-item-details">
                    <div className="cart-item-top">
                      <div>
                        <span className="cart-item-category">
                          {item.category}
                        </span>

                        <h3>
                          {item.name}
                        </h3>
                      </div>

                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item)}
                      >
                        🗑️
                      </button>
                    </div>

                    <div className="cart-item-bottom">
                      <span className="cart-item-price">
                        ₹{item.price * item.quantity}
                      </span>

                      <div className="cart-quantity">
                        <button
                          onClick={() =>
                            decreaseQuantity(item)
                          }
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div className="cart-summary">
              <div className="summary-row">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="summary-row">
                <span>Delivery</span>

                <span className="free">
                  FREE
                </span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Total</span>

                <strong>
                  ₹{totalAmount}
                </strong>
              </div>

              {/* CHECKOUT */}
              <button
                className="checkout-btn"
                onClick={onCheckout}
              >
                Place Order
                <span>→</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;