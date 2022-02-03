import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../../productData';
import { getCoverProductByKey } from '../../Helpers/getProductImages';
import {
  Wrapper,
  Content,
  ProductDetailInfo,
  ProductList,
  ProductInfo,
} from './productDetail.style';

import ProductDetailImg from '../ProductDetailImg';
import ProductDetailSavour from '../ProductDetailSavour';
import ProductDetailTitle from '../ProductDetailTitle';
import ProductDetailDesc from '../ProductDetailDesc';
import ProductDetailThumbnails from '../ProductDetailThumbnail';
import Ingredient from '../Ingredient';
import Space from '../Space';
import ProductDetailCompare from '../ProductDetailCompare';
import DisplayProduct from '../DisplayProduct';
import { motion } from 'framer-motion';
import { useMotionEffect } from '../../hooks/useMotionEffect';

const ProductDetail = ({ addProductToCart }) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductImage, setCurrentProductImage] = useState([]);
  const [allProductsImages, setAllProductsImages] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [activeImgId, setActiveImgId] = useState('');

  const location = useLocation();
  const { id: locationId } = location.state || [];

  const [controls, ref] = useMotionEffect();

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

  useEffect(() => {
    products.forEach((product) => {
      const { id, name } = product;
      if (id === locationId) {
        setCurrentProduct(product);
        setAllImages(getCoverProductByKey(name));
      } else if (locationId === undefined) {
        setCurrentProduct(products[0]);
        setAllImages(getCoverProductByKey(products[0].name));
      }

      !allProducts.length &&
        setAllProducts((prevState) => [...prevState, product]);
    });
  }, []);

  const setAllImages = (imgArray) => {
    setAllProductsImages(imgArray);
    setCurrentProductImage(imgArray[0]);
    setActiveImgId(imgArray[0].id);
  };

  const handleCurrentProduct = (name) => {
    setCurrentProduct(products.find((product) => product.name === name));
    setAllImages(getCoverProductByKey(name));
  };

  const handleChangeCurrentImage = (img) => {
    const { id } = img;
    setCurrentProductImage(img);
    setActiveImgId(id);
  };

  const colors = {
    mango: 'orange',
    banana: 'yellow',
    pineapple: 'green',
    pitahaya: 'red',
    variety: 'white',
  };

  const listAllProducts = allProducts.map(({ name, id }) => {
    const isCurrent = name === currentProduct.name;
    return (
      <ProductDetailSavour
        color={colors[currentProduct.name]}
        key={id}
        name={name}
        handleCurrentProduct={() => handleCurrentProduct(name)}
        current={isCurrent}
      />
    );
  });

  const thumbnailProducts = allProductsImages.map((src) => {
    const { id, img } = src;

    return (
      <ProductDetailThumbnails
        color={colors[currentProduct.name]}
        currentProduct={currentProduct}
        key={id}
        isCurrent={id === activeImgId}
        handleChangeCurrentImage={() => handleChangeCurrentImage(src)}
        img={img}
      />
    );
  });

  const { name, price, description, id } = currentProduct;
  const { img } = currentProductImage;

  return (
    <Wrapper>
      <Content>
        <ProductDetailImg key={activeImgId} src={img} />
        <ProductDetailInfo>
          <ProductList>
            <ul>{listAllProducts}</ul>
          </ProductList>
          <ProductInfo>
            <div className='info-text'>
              <ProductDetailTitle key={id} title={name} />
              <ProductDetailDesc
                price={price}
                desc={description}
                handleCurrentProduct={handleCurrentProduct}
                addProductToCart={() => addProductToCart(currentProduct)}
              />
            </div>

            <motion.div
              ref={ref}
              variants={container}
              animate={controls}
              initial='hidden'
              className='info-thumbnails'
            >
              {thumbnailProducts}
            </motion.div>
          </ProductInfo>
        </ProductDetailInfo>
      </Content>
      <Ingredient
        text='Zero Added Sugar'
        name={currentProduct.name}
        repeat={1}
      />
      <Space productPage={true} />
      <div className='compare-container'>
        <ProductDetailCompare
          title='tala'
          sugar={6}
          calories={40}
          tala={true}
        />
        <ProductDetailCompare
          title='them'
          sugar={13}
          calories={90}
          tala={false}
        />
      </div>
      <DisplayProduct />
    </Wrapper>
  );
};

export default ProductDetail;
