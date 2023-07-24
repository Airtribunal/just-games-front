import React from "react";

const Cart = (props) => {
  const { cartItems, handleRemoveFromCart } = props;

  return (
    <section className="cart-section">
      <div className="container">
        <h1 className="section-title">Корзина товаров</h1>
        {cartItems.length === 0 && (
          <h6
            style={{ width: "fit-content", margin: "0 auto", fontSize: "20px" }}
          >
            Корзина товаров пока пуста!
          </h6>
        )}
        <div className="cart-items-container">
          {cartItems.map((item, id) => {
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
                  <p className="card-key"><strong>Ваш ключ к игре: </strong>{item?.attributes?.productKey}</p>
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
