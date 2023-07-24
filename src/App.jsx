import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/index";
import Products from "./pages/products/index";
import AppLayout from "./components/molecules/AppLayout";
import SingleProductPage from "./pages/products/product";
import Cart from "./pages/cart";
import { PacmanLoader } from "react-spinners";

import useFetch from "./hooks/useFetch";
import { useState } from "react";

const url = "http://localhost:1337/api/products?populate=*";

function App() {
  const { data: productsData, loading } = useFetch(url);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

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

  function handleAddToCart(product) {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) => item.id === product.id && { ...productExist })
      );
    } else {
      setQuantity((prev) => prev + 1);
      setCartItems([...cartItems, { ...product }]);
    }
  }

  function handleRemoveFromCart(product) {
    setQuantity((prev) => prev - 1);
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout quantity={quantity} />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products productsData={productsData} />,
        },
        {
          path: "/products/:productId",
          element: (
            <SingleProductPage
              handleAddToCart={handleAddToCart}
              productsData={productsData}
            />
          ),
        },
        {
          path: "/about",
          element: (
            <section>
              <h1 className="section-title">Кто мы?</h1>
            </section>
          ),
        },
        {
          path: "/cart",

          element: (
            <Cart
              handleRemoveFromCart={handleRemoveFromCart}
              cartItems={cartItems}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
