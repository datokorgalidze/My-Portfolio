

import Skillwill from './Myimages/PortfolioImg.jpg';
import Logo from './Myimages/Logo.png';
import Calculaor from './Myimages/Calculator.jpg';
import Travel from './Myimages/Travel.jpg';
import React from 'react';





function Card({ title, imageSrc, text, link }) {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={title} />
      </a>
     <div className="card-content">
      <h3>{title}</h3>
      <p>{text}</p>
      <a className="card-button" href={link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div> 
    </div>
  );
}

function Project() {
  const cards = [
    {
      title: "Travel Goo",
      imageSrc:Travel,
      text: "Built on the WordPress platform,with custom html,css,php and ACF fields.",
      link: "https://groupworkskillwill.000webhostapp.com/"
    },
    {
      title: "Bon hotel",
      imageSrc: Logo,
      text: "This is one of my first projects with HTML/CSS.",
      link: "https://datokorgalidze.github.io/bonhotelwebpage/index.html"
    },
    {
      title: "Portfolio",
      imageSrc:Skillwill,
      text: "Built on the WordPress platform,with custom html,css php and ACF fields.",
      link: "https://set-blocks.000webhostapp.com/"
    },
    {
      title: "calculator",
      imageSrc:Calculaor,
      text: "This is simply calculator with js.",
      link: "https://datokorgalidze.github.io/calculator/"
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
