import React from "react";

const ImageCollage = ({ gallery, view, marginTop }) => {
  return (
    <section className='image-collage' style={{ marginTop: marginTop }}>
      <div className='container'>
        <div className='image-collage--left'>
          <img src={gallery.first[view]} alt='gallery 1' />
          <img src={gallery.second[view]} alt='gallery 2' />
        </div>
        <div className='image-collage--right'>
          <img src={gallery.third[view]} alt='gallery 3' />
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;
