import React from "react";
import { Link } from "react-router-dom";

const CtaBanner = (props) => {
  return (
    <section
      className={props.variant ? `cta-banner ${props.variant}` : "cta-banner"}
      style={{ marginTop: props.marginTop }}
    >
      {!props.variant && (
        <div className='cta-banner__img'>
          <img src={props.image} alt={props.name} />
        </div>
      )}

      <div className='container'>
        {props.variant && (
          <div className='cta-banner__img'>
            <img src={props.image} alt={props.name} />
          </div>
        )}

        <div className='cta-banner__text'>
          {props.newTag && (
            <span className='cta-banner--newTag'>New Product</span>
          )}
          {!props.variant ? <h1>{props.name}</h1> : <h2>{props.name}</h2>}
          {props.description && <p>{props.description}</p>}
          <Link
            className={
              props.btnVariant
                ? `primary-button ${props.btnVariant}`
                : "primary-button fill orange"
            }
            to={props.link}
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
