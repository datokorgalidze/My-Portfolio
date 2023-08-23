

import Skillwill from './Myimages/PortfolioImg.jpg';
import Logo from './Myimages/Logo.png';
import Calculaor from './Myimages/Calculator.jpg';
import React from 'react';





function Card({ title, imageSrc, text, link }) {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={title} />
      </a>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Project() {
  const cards = [
    {
      title: "calculator",
      imageSrc:Calculaor,
      text: "calculator with js.",
      link: "https://datokorgalidze.github.io/calculator/"
    },
    {
      title: "Bon hotel",
      imageSrc: Logo,
      text: "This is one of my first projects with HTML/CSS, two pages,",
      link: "https://datokorgalidze.github.io/bonhotelwebpage/index.html"
    },
    {
      title: "Portfolio",
      imageSrc:Skillwill,
      text: "Built on the WordPress platform,with custom html,css and php.",
      link: "https://set-blocks.000webhostapp.com/"
    },
  ];

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageSrc={card.imageSrc}
          text={card.text}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default Project;
