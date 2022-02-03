import React from 'react';
import { Wrapper, Thumbnail } from './productThumbnails.style';

const ProductThumbnails = ({
  productImages,
  currentProduct,
  color,
  activeImgId,
  handleChangeCurrentImage,
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const children = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: {
      y: 5,
      opacity: 1,
      transition: {
        transition: 'backInOut',
        duration: 0.4,
      },
    },
  };

  const thumbnailProducts = productImages.map((src) => {
    const { id, img } = src;

    return (
      <Thumbnail
        variants={children}
        color={color}
        $currentProduct={currentProduct}
        key={id}
        onClick={() => handleChangeCurrentImage(src)}
        src={img}
        style={id === activeImgId ? { outline: `1px solid ${color}` } : {}}
      />
    );
  });

  return (
    <Wrapper
      key={currentProduct.id}
      variants={container}
      animate='visible'
      initial='hidden'
    >
      {thumbnailProducts}
    </Wrapper>
  );
};

export default ProductThumbnails;
