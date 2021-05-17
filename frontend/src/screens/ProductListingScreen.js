import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductByCategory } from "../redux/actions/productActions";

import PageBanner from "../components/organisms/PageBanner/PageBanner";
import ProductCard from "../components/molecules/ProductCard/ProductCard";
import LinkCardList from "../components/organisms/LinkCardList/LinkCardList";
import AboutCard from "../components/organisms/AboutCard/AboutCard";

const ProductListingScreen = ({ match, view }) => {
  const dispatch = useDispatch();

  const catProduct = useSelector((state) => state.productGetAllCategory);
  const { loading, products, error } = catProduct;

  useEffect(() => {
    dispatch(getAllProductByCategory(match.params.category));
  }, [dispatch, match]);

  const linkCards = [
    {
      image: "/images/shared/desktop/image-headphones.png",
      link: "/products/headphones",
      category: "headphones",
    },
    {
      image: "/images/shared/desktop/image-speakers.png",
      link: "/products/speakers",
      category: "speakers",
    },
    {
      image: "/images/shared/desktop/image-earphones.png",
      link: "/products/earphones",
      category: "earphones",
    },
  ];

  const aboutImages = {
    mobile: "/images/shared/mobile/image-best-gear.jpg",
    tablet: "/images/shared/tablet/image-best-gear.jpg",
    desktop: "/images/shared/desktop/image-best-gear.jpg",
  };

  return (
    <>
      <PageBanner title={match.params.category} />
      <ul className='product-card-listing'>
        {!loading &&
          products.map((item, index) => {
            let variant = "text--left";
            if (index % 2 === 0) {
              variant = "text--right";
            }
            return (
              <li key={item._id}>
                <ProductCard variant={variant} product={item} view={view} />
              </li>
            );
          })}
      </ul>
      <LinkCardList cards={linkCards} />
      <AboutCard
        marginTop='160px'
        image={aboutImages[view]}
        name='Bringing you the'
        highlight='best'
        title='Audio gear'
        description='Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'
      />
    </>
  );
};

export default ProductListingScreen;
