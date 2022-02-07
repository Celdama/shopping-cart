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
  CompareContainer,
} from './productDetail.style';

import ProductDetailImg from '../ProductDetailImg';
import ProductDetailSavour from '../ProductDetailSavour';
import ProductDetailTitle from '../ProductDetailTitle';
import ProductDetailDesc from '../ProductDetailDesc';
import Ingredient from '../Ingredient';
import ProductThumbnails from '../ProductThumbnails';
import Space from '../Space';
import ProductDetailCompare from '../ProductDetailCompare';
import ProductListSmallScreen from '../ProductListSmallScreen';
import ProductImgSmallScreen from '../ProductImgSmallScreen';

const ProductDetail = ({ addProductToCart }) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductImage, setCurrentProductImage] = useState([]);
  const [allProductsImages, setAllProductsImages] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [activeImgId, setActiveImgId] = useState('');

  const location = useLocation();
  const { id: locationId } = location.state || [];

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
  }, [locationId]);

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
        isCurrent={isCurrent}
      />
    );
  });

  return (
    <Wrapper>
      <Content>
        <ProductListSmallScreen
          handleCurrentProduct={handleCurrentProduct}
          currentProduct={currentProduct}
          allProducts={allProducts}
          color={colors[currentProduct.name]}
        />
        <ProductDetailImg currentProductImage={currentProductImage} />
        <ProductImgSmallScreen
          productImages={allProductsImages}
          activeImgId={activeImgId}
          handleChangeCurrentImage={handleChangeCurrentImage}
        />
        <ProductDetailInfo>
          <ProductList>
            <ul>{listAllProducts}</ul>
          </ProductList>
          <ProductInfo>
            <div className='info-text'>
              <ProductDetailTitle currentProduct={currentProduct} />
              <ProductDetailDesc
                currentProduct={currentProduct}
                handleCurrentProduct={handleCurrentProduct}
                addProductToCart={() => addProductToCart(currentProduct)}
              />
            </div>
            <ProductThumbnails
              color={colors[currentProduct.name]}
              currentProduct={currentProduct}
              productImages={allProductsImages}
              activeImgId={activeImgId}
              handleChangeCurrentImage={handleChangeCurrentImage}
            />
          </ProductInfo>
        </ProductDetailInfo>
      </Content>
      <Ingredient
        text='Zero Added Sugar'
        name={currentProduct.name}
        repeat={1}
      />
      <Space productPage={true} />
      <CompareContainer>
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
      </CompareContainer>
      {/* <DisplayProduct /> */}
    </Wrapper>
  );
};

export default ProductDetail;
