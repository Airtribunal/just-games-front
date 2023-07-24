import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import circle from "../../../images/circle.svg";
import useFetch from "../../../hooks/useFetch";
import { ToastContainer } from "react-toastify";

const SingleProductPage = ({ productsData, handleAddToCart }) => {
  const { productId } = useParams();

  const singleProductCard = productsData?.data?.find(
    (product) => product.id === Number(productId)
  );

  const navigate = useNavigate();

  const { loading, error } = useFetch(
    "http://localhost:1337/api/products?populate=*"
  );

  if (error) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'column'
        }}
      >
        <h1>Error! We are working on it!</h1>
        <button>
          <a href="/products">Назад</a>
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <PacmanLoader color="#36d7b7" size={50} speedMultiplier={2} />
      </div>
    );
  }

  const name = singleProductCard?.attributes?.productName;
  const desc = singleProductCard?.attributes?.productSingleDesc;
  const price = singleProductCard?.attributes?.productPrice;
  const img = singleProductCard?.attributes?.productImg?.data?.attributes?.url;

  return (
    <section>
      <div className="container">
        <div className="single-content">
          <div className="img-container">
            <img
              className="single-img"
              src={`http://localhost:1337${img}`}
              alt={name}
            />
            <img src={circle} alt="green-circle" className="single-circle" />
          </div>
          <div className="single-info">
            <h1 className="single-title">{name}</h1>
            <p className="single-price">
              <span>price:</span>
              {price}
            </p>
            <p className="single-desc">
              {desc}
            </p>
            <div className="buttons-container">
              <button
                className="purchase-btn"
                onClick={() => handleAddToCart(singleProductCard)}
              >
                купить
              </button>
              <button
                className="purchase-btn"
                onClick={() => navigate("/products")}
              >
                назад
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SingleProductPage;
