import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <div className="hero-badge">
          ✨ Made for your cravings
        </div>

        <h1>
          Good food.
          <br />
          <span>Great mood.</span>
        </h1>

        <p>
          Discover delicious dishes picked specially for you.
          Your next favourite meal is just one click away.
        </p>

        <a href="#menu" className="hero-btn">
          Explore the Menu →
        </a>

      </div>

      <div className="hero-visual">

        <div className="food-circle">

          <div className="main-food">
            🍝
          </div>

          <div className="floating-food food-one">
            🍔
            <span>Burgers</span>
          </div>

          <div className="floating-food food-two">
            🍰
            <span>Desserts</span>
          </div>

          <div className="floating-food food-three">
            🥤
            <span>Drinks</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;