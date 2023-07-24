import React from "react";
import { ProductsSection } from "../../components/sections";
import { ProductCard } from "../../components/molecules/index";
import useFetch from "../../hooks/useFetch";
import { PacmanLoader } from "react-spinners";

const Products = ({ productsData }) => {
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
          <a href="/">Назад</a>
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

  // Products Array
  const productsArray = productsData.data?.map((item, id) => {
    return (
      <ProductCard
        key={id}
        name={item?.attributes?.productName}
        desc={item?.attributes?.productDesc}
        img={`http://localhost:1337${item?.attributes?.productImg?.data?.attributes?.url}`}
        price={item?.attributes?.productPrice}
        id={item.id}
      />
    );
  });

  return <ProductsSection productsArray={productsArray} />;
};

export default Products;
