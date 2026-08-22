import React, { useState } from "react";
import "./ContactSection.css";

function ContactSection() {

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        <div className="contact-info">

          <span className="contact-tag">
            GET IN TOUCH
          </span>

          <h2>
            Let's talk
            <br />
            <span>food.</span> 💬
          </h2>

          <p>
            Have a question, suggestion or simply want to
            tell us about your favourite dish? We'd love to
            hear from you.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Visit Us</h3>
                <p>Zavora Food Street, Hyderabad</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email Us</h3>
                <p>hello@zavora.com</p>
              </div>
            </div>

          </div>

        </div>


        <div className="contact-card">

          <div className="contact-card-top">
            <span>💌</span>

            <div>
              <h3>Send us a message</h3>
              <p>We usually reply within a day.</p>
            </div>
          </div>

          {sent ? (

            <div className="success-message">
              <div>🎉</div>
              <h3>Message received!</h3>
              <p>
                Thanks for reaching out to Zavora.
                We'll get back to you soon.
              </p>
            </div>

          ) : (

            <form onSubmit={handleSubmit}>

              <div className="input-row">

                <input
                  type="text"
                  placeholder="Your name"
                  required
                />

                <input
                  type="email"
                  placeholder="Your email"
                  required
                />

              </div>

              <input
                type="text"
                placeholder="What is this about?"
                required
              />

              <textarea
                rows="5"
                placeholder="Tell us what's on your mind..."
                required
              ></textarea>

              <button type="submit">
                Send Message <span>→</span>
              </button>

            </form>

          )}

        </div>

      </div>

    </section>
  );
}

export default ContactSection;