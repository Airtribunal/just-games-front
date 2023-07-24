import React from "react";
import joystick from "../../images/joystick.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({quantity}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate()

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div onClick={() => navigate('/home')} className="logo">
            <h1 className="logo-lets">JG</h1>
            <img src={joystick} alt="gamepad" />
            <div className="logo-circle"></div>
          </div>
          <div className="nav-links">
            <Link
              to="/home"
              className={pathname.startsWith("/home") ? "active" : ""}
            >
              главная
            </Link>
            <Link
              to="/products"
              className={pathname.startsWith("/products") ? "active" : ""}
            >
              товары
            </Link>
            <Link
              to="/about"
              className={pathname.startsWith("/about") ? "active" : ""}
            >
              o нас
            </Link>
            <Link
              to="/cart"
              className={pathname.startsWith("/cart") ? "active" : ""}
            >
              корзина {quantity}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
