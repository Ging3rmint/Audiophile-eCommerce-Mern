import React from "react";

const Features = ({ description, includes }) => {
  return (
    <div className='features'>
      <div className='container'>
        <div className='features--left'>
          <h2>Features</h2>
          <p>{description}</p>
        </div>
        <div className='features--right'>
          <h2>In the box</h2>
          <ul>
            {includes &&
              includes.map((item) => {
                return (
                  <li key={item._id}>
                    <span className='features--right__qty'>
                      {item.quantity} X
                    </span>
                    <span className='features--right__item'>{item.item}</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
