import React from "react";
import { Hero, Advantages, Contact } from "../../components/sections";
import { AdvantageCard } from "../../components/molecules/index";

import stability from "../../images/Stability.png";
import fastness from "../../images/Fastness.png";
import helpfulness from "../../images/Helpfulness.png";
const Home = () => {
  // Advantage Cards
  const advantageData = [
    {
      name: "Надёжность",
      desc: "Мы гарантируем надежность наших услуг.",
      img: stability,
    },
    {
      name: "Поддержка",
      desc: "Мы гарантируем отличную техподдержку.",
      img: helpfulness,
    },
    {
      name: "Скорость",
      desc: "Мы гарантируем скорость доставки.",
      img: fastness,
    },
  ];

  const advantageCards = advantageData.map((card, id) => (
    <AdvantageCard key={id} {...card} />
  ));

  return (
    <>
      <Hero />
      <Advantages cards={advantageCards}/>
      <Contact />
    </>
  );
};

export default Home;
