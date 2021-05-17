import React from "react";
import { Link } from "react-router-dom";

const CtaBannerTwoPane = ({ link, image, name, marginTop }) => {
  return (
    <section className='cta-banner-twoPane' style={{ marginTop: marginTop }}>
      <div className='container'>
        <div className='cta-banner-twoPane--left'>
          <img src={image} alt={name} />
        </div>
        <div className='cta-banner-twoPane--right'>
          <h2>{name}</h2>
          <Link to={link} className='primary-button fill black'>
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerTwoPane;
