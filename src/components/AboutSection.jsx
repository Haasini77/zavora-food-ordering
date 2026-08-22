import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* TOP HEADING */}
        <div className="about-heading">

          <span className="about-tag">
            ABOUT ZAVORA
          </span>

          <h2>
            More than food.
            <br />
            It's a feeling.
          </h2>

          <p>
            At Zavora, we believe every craving has a story.
            From a quick bite between classes to a special
            meal with your favourite people, we bring delicious
            moments straight to your table.
          </p>

        </div>


        {/* STORY CARD */}
        <div className="about-story">

          <div className="story-icon">
            🍽️
          </div>

          <div className="story-content">

            <span className="story-label">
              OUR STORY
            </span>

            <h3>
              Made for cravings,
              <br />
              made with love.
            </h3>

            <p>
              Zavora was created with one simple idea —
              to make delicious food that feels like home.
              From comforting classics to exciting new
              flavours, every dish is prepared with care
              and passion.
            </p>

            <p>
              We carefully choose fresh ingredients, balance
              every flavour and put love into everything we
              serve. Whether you're grabbing a quick bite or
              enjoying a meal with your loved ones, Zavora
              is here to make every moment a little more special.
            </p>

          </div>

        </div>


        {/* VALUES */}
        <div className="about-values">

          <div className="value-card">

            <div className="value-icon">
              🥗
            </div>

            <h3>
              Fresh Ingredients
            </h3>

            <p>
              Quality ingredients in every bite.
            </p>

          </div>


          <div className="value-card">

            <div className="value-icon">
              ❤️
            </div>

            <h3>
              Made With Love
            </h3>

            <p>
              Food prepared with care and passion.
            </p>

          </div>


          <div className="value-card">

            <div className="value-icon">
              ⚡
            </div>

            <h3>
              Made For Your Mood
            </h3>

            <p>
              Find the perfect dish for every craving.
            </p>

          </div>

        </div>


        {/* BOTTOM MESSAGE */}
        <div className="about-bottom">

          <div>
            <strong>100%</strong>
            <span>Good Vibes</span>
          </div>

          <div>
            <span>✨</span>
            <span>Made Fresh</span>
          </div>

          <div>
            <span>💗</span>
            <span>Served With Love</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;