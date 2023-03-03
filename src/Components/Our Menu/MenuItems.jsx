import React, { useState } from "react";
import "./menu.css";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./Data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function MenuItems() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main id="menu">
      <section className="menu">
        <div className="text-center">
          <h2>our menu</h2>
          <p className="about-heading">
            Check Our <span>Yummy Menu</span>
          </p>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <h2 className="text-center"> menu</h2>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MenuItems;
