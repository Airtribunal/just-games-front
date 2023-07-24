import React from "react";

const Products = (props) => {
  const { productsArray } = props;

  return (
    <section className="products-section">
      <div className="container">
        <h1 className="section-title products-title">Каталог товаров</h1>
        <div className="cards-container">
          {productsArray}
        </div>
      </div>
    </section>
  );
};

export default Products;
