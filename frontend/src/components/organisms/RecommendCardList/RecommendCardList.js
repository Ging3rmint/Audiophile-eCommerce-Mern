import React from "react";

import RecommendCard from "../../molecules/RecommendCard/RecommendCard";

const RecommendCardList = ({ others, view, marginTop }) => {
  return (
    <section className='recommend-cardList' style={{ marginTop: marginTop }}>
      <div className='container'>
        <h2>You May Also Like</h2>
        <ul>
          {others.map((recommend) => {
            return (
              <RecommendCard
                recommend={recommend}
                view={view}
                key={recommend._id}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default RecommendCardList;
