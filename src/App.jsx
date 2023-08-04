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
import { toast } from "react-toastify";

import useFetch from "./hooks/useFetch";
import { useState } from "react";
import About from "./pages/about";

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
      toast.error("Продукт уже в корзине", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setQuantity((prev) => prev + 1);
      setCartItems([...cartItems, { ...product }]);
      toast.success("Товар успешно добавлен в корзину", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
          element: <About />,
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
