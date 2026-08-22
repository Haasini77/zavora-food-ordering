import React, { useEffect, useState } from "react";
import "./MenuSection.css";

const categories = [
  { name: "All Menu", icon: "🍽️" },
  { name: "Fresh", icon: "🍃" },
  { name: "Quick Bites", icon: "⚡" },
  { name: "Premium", icon: "👑" },
  { name: "Sweet", icon: "🍰" },
  { name: "Spicy", icon: "🌶️" },
  { name: "Drinks", icon: "🥤" },
];

const foodItems = [
  // FRESH
  {
    id: 1,
    name: "Avocado Garden Bowl",
    category: "Fresh",
    emoji: "🥗",
    description:
      "Fresh greens, avocado, corn and crunchy veggies.",
    price: 249,
  },
  {
    id: 2,
    name: "Classic Caesar Salad",
    category: "Fresh",
    emoji: "🥬",
    description:
      "Crisp lettuce with creamy dressing and herbs.",
    price: 199,
  },
  {
    id: 3,
    name: "Paneer Power Bowl",
    category: "Fresh",
    emoji: "🥙",
    description:
      "Healthy paneer, vegetables and fresh greens.",
    price: 229,
  },
  {
    id: 4,
    name: "Rainbow Veggie Wrap",
    category: "Fresh",
    emoji: "🌯",
    description:
      "Colorful vegetables wrapped with creamy filling.",
    price: 179,
  },

  // QUICK BITES
  {
    id: 5,
    name: "Cheesy Garlic Bread",
    category: "Quick Bites",
    emoji: "🥖",
    description:
      "Crispy bread loaded with warm melted cheese.",
    price: 149,
  },
  {
    id: 6,
    name: "Classic Veg Burger",
    category: "Quick Bites",
    emoji: "🍔",
    description:
      "Crispy veggie patty with fresh lettuce and cheese.",
    price: 179,
  },
  {
    id: 7,
    name: "Crispy French Fries",
    category: "Quick Bites",
    emoji: "🍟",
    description:
      "Golden crispy fries seasoned to perfection.",
    price: 119,
  },
  {
    id: 8,
    name: "Veg Cheese Sandwich",
    category: "Quick Bites",
    emoji: "🥪",
    description:
      "Toasted bread filled with veggies and cheese.",
    price: 139,
  },

  // PREMIUM
  {
    id: 9,
    name: "Truffle Alfredo Pasta",
    category: "Premium",
    emoji: "🍝",
    description:
      "Creamy Alfredo pasta finished with truffle flavor.",
    price: 349,
  },
  {
    id: 10,
    name: "Paneer Steak Platter",
    category: "Premium",
    emoji: "🍽️",
    description:
      "Grilled paneer served with creamy sides and herbs.",
    price: 399,
  },
  {
    id: 11,
    name: "Four Cheese Pizza",
    category: "Premium",
    emoji: "🍕",
    description:
      "Rich blend of four cheeses on a soft crust.",
    price: 429,
  },
  {
    id: 12,
    name: "Creamy Pesto Pasta",
    category: "Premium",
    emoji: "🍝",
    description:
      "Silky pesto sauce with herbs and parmesan.",
    price: 329,
  },

  // SWEET
  {
    id: 13,
    name: "Chocolate Lava Cake",
    category: "Sweet",
    emoji: "🍫",
    description:
      "Warm chocolate cake with a gooey centre.",
    price: 169,
  },
  {
    id: 14,
    name: "Strawberry Cream Cake",
    category: "Sweet",
    emoji: "🍰",
    description:
      "Soft sponge layered with fresh strawberry cream.",
    price: 159,
  },
  {
    id: 15,
    name: "Classic Brownie",
    category: "Sweet",
    emoji: "🍪",
    description:
      "Rich fudgy brownie with delicious chocolate flavor.",
    price: 129,
  },
  {
    id: 16,
    name: "Mango Cheesecake",
    category: "Sweet",
    emoji: "🥭",
    description:
      "Creamy cheesecake topped with sweet mango.",
    price: 189,
  },

  // SPICY
  {
    id: 17,
    name: "Spicy Arrabbiata Pasta",
    category: "Spicy",
    emoji: "🍝",
    description:
      "Penne tossed in a bold spicy tomato sauce.",
    price: 229,
  },
  {
    id: 18,
    name: "Peri Peri Paneer",
    category: "Spicy",
    emoji: "🌶️",
    description:
      "Soft paneer coated in fiery peri peri marinade.",
    price: 249,
  },
  {
    id: 19,
    name: "Chilli Cheese Toast",
    category: "Spicy",
    emoji: "🌶️",
    description:
      "Crunchy toast topped with spicy chilli cheese.",
    price: 159,
  },
  {
    id: 20,
    name: "Schezwan Noodles",
    category: "Spicy",
    emoji: "🍜",
    description:
      "Hot and flavorful noodles with Schezwan sauce.",
    price: 199,
  },

  // DRINKS
  {
    id: 21,
    name: "Classic Cold Coffee",
    category: "Drinks",
    emoji: "🥤",
    description:
      "Chilled creamy coffee with a smooth finish.",
    price: 129,
  },
  {
    id: 22,
    name: "Mango Smoothie",
    category: "Drinks",
    emoji: "🥭",
    description:
      "Fresh mango blended into a creamy smoothie.",
    price: 149,
  },
  {
    id: 23,
    name: "Strawberry Milkshake",
    category: "Drinks",
    emoji: "🍓",
    description:
      "Creamy strawberry shake with a fruity taste.",
    price: 159,
  },
  {
    id: 24,
    name: "Mint Lime Cooler",
    category: "Drinks",
    emoji: "🍋",
    description:
      "Refreshing lime drink with cool mint.",
    price: 99,
  },
  {
    id: 25,
    name: "Chocolate Frappe",
    category: "Drinks",
    emoji: "☕",
    description:
      "Cold chocolate frappe with a rich creamy taste.",
    price: 179,
  },
];

function MenuSection({
  selectedCategory,
  setSelectedCategory,
  cartItems,
  setCartItems,
}) {
  const [activeCategory, setActiveCategory] =
    useState("All Menu");

  // Receive category selection
  useEffect(() => {
    const handleCategoryChange = (event) => {
      setActiveCategory(event.detail);
    };

    window.addEventListener(
      "zavora-category",
      handleCategoryChange
    );

    return () => {
      window.removeEventListener(
        "zavora-category",
        handleCategoryChange
      );
    };
  }, []);

  // Sync selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setActiveCategory("All Menu");
    } else if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);

  // Filter food
  const filteredItems =
    activeCategory === "All Menu"
      ? foodItems
      : foodItems.filter(
          (food) =>
            food.category === activeCategory
        );

  // Category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category.name);

    if (category.name === "All Menu") {
      setSelectedCategory("All");
    } else {
      setSelectedCategory(category.name);
    }
  };

  // Add one quantity
  const increaseQuantity = (item) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (cartItem) =>
          cartItem.id === item.id
      );

      if (existingItem) {
        return previousItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...previousItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  // Remove one quantity
  const decreaseQuantity = (item) => {
    setCartItems((previousItems) => {
      return previousItems
        .map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity - 1,
              }
            : cartItem
        )
        .filter(
          (cartItem) =>
            cartItem.quantity > 0
        );
    });
  };

  return (
    <section
      className="menu-section"
      id="menu"
    >

      {/* MENU HEADING */}
      <div className="menu-heading">

        <span>ZAVORA MENU</span>

        <h2>
          Something delicious is
          <br />
          waiting.
        </h2>

        <p>
          Pick your favourite and make your craving count.
        </p>

      </div>

      {/* CATEGORY BUTTONS */}
      <div className="filter-buttons">

        {categories.map((category) => (
          <button
            key={category.name}
            className={`filter-btn ${
              activeCategory === category.name
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleCategoryClick(category)
            }
          >
            <span
              style={{
                marginRight: "6px",
              }}
            >
              {category.icon}
            </span>

            {category.name}
          </button>
        ))}

      </div>

      {/* FOOD GRID */}
      <div className="food-grid">

        {filteredItems.map((item) => {

          const cartItem = cartItems.find(
            (cartItem) =>
              cartItem.id === item.id
          );

          const quantity =
            cartItem?.quantity || 0;

          return (
            <article
              className="food-card"
              key={item.id}
            >

              {/* FOOD IMAGE */}
              <div className="food-image">
                <span>
                  {item.emoji}
                </span>
              </div>

              {/* FOOD INFO */}
              <div className="food-info">

                <div className="food-category">
                  {item.category}
                </div>

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.description}
                </p>

                <div className="food-bottom">

                  <span className="food-price">
                    ₹{item.price}
                  </span>

                  {quantity === 0 ? (

                    <button
                      className="add-btn"
                      onClick={() =>
                        increaseQuantity(item)
                      }
                    >
                      + Add
                    </button>

                  ) : (

                    <div className="quantity-control">

                      <button
                        className="quantity-btn"
                        onClick={() =>
                          decreaseQuantity(item)
                        }
                      >
                        −
                      </button>

                      <span className="quantity-number">
                        {quantity}
                      </span>

                      <button
                        className="quantity-btn"
                        onClick={() =>
                          increaseQuantity(item)
                        }
                      >
                        +
                      </button>

                    </div>

                  )}

                </div>

              </div>

            </article>
          );
        })}

      </div>

      {/* NO ITEMS */}
      {filteredItems.length === 0 && (
        <div className="no-items">
          <p>
            No items found in this category.
          </p>
        </div>
      )}

    </section>
  );
}

export default MenuSection;