import React from "react";
import heroImg from "../../images/hero-img.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-greet">
            <h1 className="hero-title">
              В <span>JustGames</span> вы найдете всё по <span> вкусной </span>{" "}
              цене.
            </h1>
            <h5 className="hero-description">
              Лучший ассортимент в Москве, быстрая доставка и качество товара -
              наши главные преимущества
            </h5>
            <button
              className="hero-button"
              onClick={() => navigate("/products")}
            >
              Посмотреть Товары
            </button>
          </div>
          <div className="hero-img">
            <img src={heroImg} alt="monkey-nft" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
