import React from "react";
import { Link } from "react-router-dom";

const RecommendCard = ({ recommend, view }) => {
  return (
    <li className='recommend-card'>
      <div className='recommend-card__img'>
        <img src={recommend.image[view]} alt={recommend.name} />
      </div>
      <h3>{recommend.name}</h3>
      <Link
        className='primary-button fill orange'
        to={`/product/${recommend.slug}`}
      >
        See Product
      </Link>
    </li>
  );
};

export default RecommendCard;
