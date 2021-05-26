import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ChevronRightIcon } from "../../../assets/icons/icon-arrow-right.svg";

const LinkCard = ({ card, onClickHandler }) => {
  const { link, category, image } = card;

  return (
    <Link className='link-card' to={link} onClick={onClickHandler}>
      <div className='link-card__img'>
        <img src={image} alt={category} />
      </div>
      <div className='link-card__text'>
        <h3>{category}</h3>
        <span>
          Shop <ChevronRightIcon className='icon' />
        </span>
      </div>
    </Link>
  );
};

export default LinkCard;
