import React from "react";

const AboutCard = (props) => {
  return (
    <section
      className='about-card'
      style={{ marginTop: props.marginTop, marginBottom: props.marginBottom }}
    >
      <div className='container'>
        <div className='about-card__img'>
          <img src={props.image} alt={props.name} />
        </div>
        <div className='about-card__text'>
          <h2>
            {props.name} {props.highlight && <span>{props.highlight}</span>}{" "}
            {props.title}
          </h2>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
