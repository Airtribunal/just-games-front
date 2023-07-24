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

import useFetch from "./hooks/useFetch";
import { useState } from "react";

const url = "http://localhost:1337/api/products?populate=*";

function App() {
  const { data: productsData } = useFetch(url);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  function handleAddToCart(product) {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setCartItems(
        cartItems.map((item) => item.id === product.id && { ...productInCart })
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
