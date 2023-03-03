import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="nav d-flex justify-content-center">
      {categories.map((category, index) => {
        return (
          <span>
            <h3
              className="dishes"
              key={index}
              onClick={() => filterItems(category)}
            >
              <p> {category}</p>
            </h3>
          </span>
        );
      })}
    </div>
  );
};

export default Categories;
