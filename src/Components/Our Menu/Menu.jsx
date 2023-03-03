import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="row  container m-auto">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="col-lg-4  menu-item m-auto">
            <img src={img} alt={title} className="menu-img img-fluid    " />

            <h4>{title}</h4>
            <p class="ingredients">{desc}</p>

            <p class="price">{price}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
