// Card.js
import React from 'react';
import './Card.css';

const ProductCard = ({ cards, onCardClick }) => {
  return (
    <div id='card' className="unique-card-container">
      {cards.map((card, index) => (
        <div
          key={index}
          className="unique-card"
          onClick={() => onCardClick(card)}
        >
          <div className="unique-info">
            <img src={card.image} alt={card.name} />
            <h3>{card.name}</h3>
            <div className="unique-consultant-detail">
              <p>Click for details</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
