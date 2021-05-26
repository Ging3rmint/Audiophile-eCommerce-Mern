import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../redux/actions/productActions";

import ProductCard from "../components/molecules/ProductCard/ProductCard";
import LinkCardList from "../components/organisms/LinkCardList/LinkCardList";
import AboutCard from "../components/organisms/AboutCard/AboutCard";
import Features from "../components/molecules/Features/Features";
import ImageCollage from "../components/organisms/ImageCollage/ImageCollage";
import RecommendCardList from "../components/organisms/RecommendCardList/RecommendCardList";

const ProductScreen = ({ match, history, view, linkCards }) => {
  const dispatch = useDispatch();

  const productDetail = useSelector((state) => state.productGetBySlug);
  const { loading, product } = productDetail;

  useEffect(() => {
    dispatch(getProductBySlug(match.params.slug));
  }, [dispatch, match]);

  const aboutImages = {
    mobile: "/images/shared/mobile/image-best-gear.jpg",
    tablet: "/images/shared/tablet/image-best-gear.jpg",
    desktop: "/images/shared/desktop/image-best-gear.jpg",
  };

  const onBackHandler = () => {
    history.goBack();
  };

  return (
    <>
      {!loading && (
        <section className='product-detail'>
          <div className='container'>
            <button
              style={
                view !== "destop"
                  ? {
                      marginTop: "16px",
                      marginBottom: "24px",
                      marginLeft: "24px",
                    }
                  : { marginTop: "79px" }
              }
              onClick={onBackHandler}
              className='back-button'
            >
              Go Back
            </button>
          </div>
          <ProductCard
            marginTop={view !== "desktop" ? "0px" : "56px"}
            variant='cost-detail'
            product={product}
            view={view}
            addToCart={true}
          />
          <Features
            description={product.features}
            includes={product.includes}
          />
          <ImageCollage
            gallery={product.gallery}
            view={view}
            marginTop={view !== "desktop" ? "88px" : "160px"}
          />
          <RecommendCardList
            others={product.others}
            view={view}
            marginTop={view !== "desktop" ? "120px" : "160px"}
          />
        </section>
      )}
      <LinkCardList
        cards={linkCards}
        marginTop={view !== "desktop" ? "120px" : "160px"}
      />
      <AboutCard
        marginTop='160px'
        marginBottom='200px'
        image={aboutImages[view]}
        name='Bringing you the'
        highlight='best'
        title='Audio gear'
        description='Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'
      />
    </>
  );
};

export default ProductScreen;
