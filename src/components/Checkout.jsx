import React, { useState } from "react";
import "./Checkout.css";

function Checkout({
  cartItems,
  onClose,
  onOrderPlaced,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const generateOrderId = () => {
    return `ZV-${Math.floor(1000 + Math.random() * 9000)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ONLINE PAYMENT DEMO
    if (formData.payment === "Online Payment") {
      setPaymentProcessing(true);

      setTimeout(() => {
        setPaymentProcessing(false);
        setPaymentSuccess(true);

        setTimeout(() => {
          setOrderId(generateOrderId());
          setOrderPlaced(true);

          if (onOrderPlaced) {
            onOrderPlaced();
          }
        }, 1200);
      }, 1500);

      return;
    }

    // CASH ON DELIVERY
    setOrderId(generateOrderId());
    setOrderPlaced(true);

    if (onOrderPlaced) {
      onOrderPlaced();
    }
  };

  /* ================================
     PAYMENT PROCESSING
  ================================= */

  if (paymentProcessing) {
    return (
      <section className="checkout-section">

        <div className="checkout-success">

          <div className="success-icon">
            💳
          </div>

          <span className="checkout-tag">
            ZAVORA PAYMENT
          </span>

          <h2>
            Processing payment...
          </h2>

          <p>
            Please wait while we process
            your demo payment.
          </p>

          <div className="payment-loader">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="payment-amount">
            ₹{totalAmount}
          </div>

        </div>

      </section>
    );
  }

  /* ================================
     PAYMENT SUCCESS
  ================================= */

  if (paymentSuccess && !orderPlaced) {
    return (
      <section className="checkout-section">

        <div className="checkout-success">

          <div className="success-icon">
            ✅
          </div>

          <span className="checkout-tag">
            ZAVORA PAYMENT
          </span>

          <h2>
            Payment successful!
          </h2>

          <p>
            Your payment has been completed
            successfully.
            <br />
            Confirming your Zavora order...
          </p>

          <div className="success-order-info">

            <span>
              Amount Paid
            </span>

            <strong>
              ₹{totalAmount}
            </strong>

          </div>

        </div>

      </section>
    );
  }

  /* ================================
     ORDER CONFIRMED
  ================================= */

  if (orderPlaced) {
    return (
      <section className="checkout-section">

        <div className="checkout-success">

          <div className="success-icon">
            🎉
          </div>

          <span className="checkout-tag">
            ZAVORA
          </span>

          <h2>
            Order confirmed!
          </h2>

          <p>
            Thank you, {formData.name}.
            <br />
            Your delicious order is on its way.
          </p>

          <div className="success-order-info">

            <span>
              {totalItems} items
            </span>

            <strong>
              ₹{totalAmount}
            </strong>

          </div>

          <div className="order-details">

            <p>
              Order ID
              <strong>
                {orderId}
              </strong>
            </p>

            <p>
              🚚 Estimated delivery:
              <strong>
                30–40 mins
              </strong>
            </p>

            <p>
              {formData.payment === "Online Payment"
                ? "💳 Online Payment"
                : "💵 Cash on Delivery"}
            </p>

          </div>

          <button
            className="back-menu-btn"
            onClick={onClose}
          >
            Back to Menu →
          </button>

        </div>

      </section>
    );
  }

  /* ================================
     CHECKOUT PAGE
  ================================= */

  return (
    <section className="checkout-section">

      <div className="checkout-container">

        {/* HEADER */}

        <div className="checkout-heading">

          <span className="checkout-tag">
            ZAVORA CHECKOUT
          </span>

          <h2>
            Almost there. 🍽️
          </h2>

          <p>
            Just a few details and your craving
            is ready to go.
          </p>

        </div>

        <div className="checkout-content">

          {/* CUSTOMER FORM */}

          <div className="checkout-form-card">

            <h3>
              Delivery details
            </h3>

            <p className="form-subtitle">
              Tell us where to deliver your order.
            </p>

            <form onSubmit={handleSubmit}>

              <label>
                Your name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>
                Phone number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label>
                Delivery address
              </label>

              <textarea
                name="address"
                placeholder="House no, street, area..."
                value={formData.address}
                onChange={handleChange}
                required
              />

              <label>
                Payment method
              </label>

              <div className="payment-options">

                {/* CASH ON DELIVERY */}

                <label className="payment-option">

                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={
                      formData.payment ===
                      "Cash on Delivery"
                    }
                    onChange={handleChange}
                  />

                  <span>
                    💵 Cash on Delivery
                  </span>

                </label>

                {/* ONLINE PAYMENT */}

                <label className="payment-option">

                  <input
                    type="radio"
                    name="payment"
                    value="Online Payment"
                    checked={
                      formData.payment ===
                      "Online Payment"
                    }
                    onChange={handleChange}
                  />

                  <span>
                    💳 Online Payment
                  </span>

                </label>

              </div>

              {/* ONLINE PAYMENT INFO */}

              {formData.payment === "Online Payment" && (
                <div className="demo-payment-note">
                  🔒 Secure demo payment
                  <br />
                  <small>
                    No real money will be charged.
                  </small>
                </div>
              )}

              <button
                type="submit"
                className="place-order-btn"
              >
                {formData.payment === "Online Payment"
                  ? "Pay & Place Order"
                  : "Place Order"}

                <span>
                  →
                </span>

              </button>

            </form>

          </div>

          {/* ORDER SUMMARY */}

          <div className="checkout-summary">

            <div className="summary-header">

              <span>
                YOUR ORDER
              </span>

              <strong>
                {totalItems} items
              </strong>

            </div>

            <div className="checkout-items">

              {cartItems.map((item) => (

                <div
                  className="checkout-item"
                  key={item.id}
                >

                  <div className="checkout-item-icon">
                    {item.emoji}
                  </div>

                  <div className="checkout-item-info">

                    <h4>
                      {item.name}
                    </h4>

                    <p>
                      {item.quantity} × ₹{item.price}
                    </p>

                  </div>

                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>

                </div>

              ))}

            </div>

            <div className="checkout-divider"></div>

            <div className="checkout-total-row">

              <span>
                Total
              </span>

              <strong>
                ₹{totalAmount}
              </strong>

            </div>

            <div className="checkout-note">
              🚚 Free delivery on this order
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Checkout;