import React from "react";
import "./CravingMood.css";

const categories = [
  {
    name: "Fresh",
    icon: "🍃",
    description: "Light, fresh and healthy choices",
  },
  {
    name: "Quick Bites",
    icon: "⚡",
    description: "Tasty food when you are in a hurry",
  },
  {
    name: "Premium",
    icon: "👑",
    description: "Special dishes made for special cravings",
  },
  {
    name: "Sweet",
    icon: "🍰",
    description: "Little treats for your sweet moments",
  },
  {
    name: "Spicy",
    icon: "🌶️",
    description: "Bold flavours with a spicy kick",
  },
  {
    name: "Drinks",
    icon: "🥤",
    description: "Refreshing drinks for every mood",
  },
];

function CravingMood({ onCategorySelect }) {
  const handleCategoryClick = (category) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <section className="craving-section" id="categories">

      {/* Heading */}
      <div className="craving-heading">

        <div className="small-heading">
          ZAVORA CATEGORIES
        </div>

        <h2>
          What are you craving today? <span>✨</span>
        </h2>

        <p className="craving-subtitle">
          Pick a category and discover something made just for you.
        </p>

      </div>

      {/* Category Cards */}
      <div className="mood-grid">

        {categories.map((category) => (
          <div
            className="mood-card"
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
          >

            {/* Icon */}
            <div className="mood-emoji">
              {category.icon}
            </div>

            {/* Category Name */}
            <h3>{category.name}</h3>

            {/* Description */}
            <p>{category.description}</p>

            {/* Explore Button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handleCategoryClick(category.name);
              }}
            >
              Explore →
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CravingMood;