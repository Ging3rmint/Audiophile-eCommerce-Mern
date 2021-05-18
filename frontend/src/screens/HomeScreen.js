import React from "react";
import CtaBanner from "../components/organisms/CtaBanner/CtaBanner";
import CtaBannerTwoPane from "../components/organisms/CtaBannerTwoPane/CtaBannerTwoPane";
import AboutCard from "../components/organisms/AboutCard/AboutCard";
import LinkCardList from "../components/organisms/LinkCardList/LinkCardList";

const HomeScreen = ({ view }) => {
  const ctaPrimaryImages = {
    mobile: "/images/home/mobile/image-header.jpg",
    tablet: "/images/home/tablet/image-header.jpg",
    desktop: "/images/home/desktop/image-header.jpg",
  };

  const ctaSub1Images = {
    mobile: "/images/home/mobile/image-speaker-zx9.png",
    tablet: "/images/home/tablet/image-speaker-zx9.png",
    desktop: "/images/home/desktop/image-speaker-zx9.png",
  };

  const ctaSub2Images = {
    mobile: "/images/home/mobile/image-speaker-zx7.jpg",
    tablet: "/images/home/tablet/image-speaker-zx7.jpg",
    desktop: "/images/home/desktop/image-speaker-zx7.jpg",
  };

  const ctaSub3Images = {
    mobile: "/images/home/mobile/image-earphones-yx1.jpg",
    tablet: "/images/home/tablet/image-earphones-yx1.jpg",
    desktop: "/images/home/desktop/image-earphones-yx1.jpg",
  };

  const aboutImages = {
    mobile: "/images/shared/mobile/image-best-gear.jpg",
    tablet: "/images/shared/tablet/image-best-gear.jpg",
    desktop: "/images/shared/desktop/image-best-gear.jpg",
  };

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

  return (
    <>
      <CtaBanner
        image={ctaPrimaryImages[view]}
        name='XX99 Mark II Headphones'
        link='/product/xx99-mark-two-headphones'
        description='Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'
        newTag={true}
      />
      <LinkCardList cards={linkCards} />
      <CtaBanner
        marginTop='168px'
        variant='secondary bg-orange text-right image-float'
        btnVariant='fill black'
        image={ctaSub1Images[view]}
        name='ZX9
        SPEAKER'
        link='/product/xx99-mark-two-headphones'
        description='Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'
      />
      <CtaBanner
        marginTop='48px'
        variant='secondary text-float title-small title-black'
        btnVariant='fill black'
        image={ctaSub2Images[view]}
        name='ZX7
        SPEAKER'
        link='/product/xx99-mark-two-headphones'
      />
      <CtaBannerTwoPane
        marginTop='48px'
        image={ctaSub3Images[view]}
        name='YX1 EARPHONES'
        link='/product/yx1-earphones'
      />
      <AboutCard
        marginTop='200px'
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

export default HomeScreen;
