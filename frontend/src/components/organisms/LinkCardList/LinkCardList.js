import React from "react";
import LinkCard from "../../molecules/LinkCard/LinkCard";

const LinkCardList = ({ cards }) => {
  return (
    <section className='link-cardList'>
      <div className='container'>
        <ul>
          {cards.map((card, index) => {
            return (
              <li key={card.category + index}>
                <LinkCard card={card} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default LinkCardList;
