import React from "react";
import LinkCard from "../../molecules/LinkCard/LinkCard";

const LinkCardList = ({ cards, marginTop, onClickHandler }) => {
  return (
    <section className='link-cardList' style={{ marginTop: marginTop }}>
      <div className='container'>
        <ul>
          {cards.map((card, index) => {
            return (
              <li key={card.category + index}>
                <LinkCard onClickHandler={onClickHandler} card={card} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default LinkCardList;
