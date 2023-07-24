import React from "react";
import { ProductsSection } from "../../components/sections";
import { ProductCard } from "../../components/molecules/index";
import { useFetcher } from "react-router-dom";

const Products = ({ productsData }) => {
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
