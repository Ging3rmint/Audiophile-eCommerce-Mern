import React from "react";

import LinkCardList from "../LinkCardList/LinkCardList";

const MobileMenu = ({ cards, isVisible, onClickHandler }) => {
  return (
    <div
      className={
        isVisible ? "mobile-menu--overlay fadeIn" : "mobile-menu--overlay"
      }
    >
      <div className='mobile-menu'>
        <LinkCardList onClickHandler={onClickHandler} cards={cards} />
      </div>
    </div>
  );
};

export default MobileMenu;
