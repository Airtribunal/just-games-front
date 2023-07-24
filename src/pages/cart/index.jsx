import React from "react";

const Cart = (props) => {
  const { cartItems, handleRemoveFromCart } = props;

  return (
    <section className="cart-section">
      <div className="container">
        <h1 className="section-title">Корзина товаров</h1>
        <div className="cart-items-container">
          {cartItems.length === 0 && <h3>Корзина товаров пока пуста!</h3>}
          {cartItems.map((item, id) => {
            console.log(item);
            return (
              <div className="card" key={id}>
                <div className="card-img">
                  <img
                    src={`http://localhost:1337${item?.attributes?.productImg?.data?.attributes?.url}`}
                    alt="product-img"
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">
                    {item?.attributes?.productName}
                  </h3>
                  <p className="card-description">
                    {item?.attributes?.productDesc}
                  </p>
                  <p className="card-price">{item?.attributes?.productPrice}</p>
                  <button
                    className="card-button"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    удалить
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cart;
