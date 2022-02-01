import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../../productData';
import getCoverProductByKey from '../../Helpers/getCoverProductByKey';
import { Wrapper, Content, Image } from './productDetail.style';

import ProductDetailSavour from '../ProductDetailSavour';
import ProductDetailTitle from '../ProductDetailTitle';
import ProductDetailDesc from '../ProductDetailDesc';
import ProductDetailThumbnails from '../ProductDetailThumbnail';
import Ingredient from '../Ingredient';
import Space from '../Space';
import ProductDetailCompare from '../ProductDetailCompare';

const ProductDetail = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductImage, setCurrentProductImage] = useState([]);
  const [allProductsImages, setAllProductsImages] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [activeImgId, setActiveImgId] = useState('');

  const location = useLocation();
  const { id: locationId } = location.state;

  useEffect(() => {
    products.forEach((product) => {
      const { id, name } = product;
      if (id === locationId) {
        setCurrentProduct(product);
        setAllImages(getCoverProductByKey(name));
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

  const { name, price, description } = currentProduct;

  return (
    <Wrapper>
      <Content>
        <div className='left'>
          <Image key={activeImgId} src={currentProductImage.img} />
        </div>
        <div className='right'>
          <div className='product-list'>
            <ul>{listAllProducts}</ul>
          </div>

          <div className='product-info'>
            <div className='product-text'>
              <ProductDetailTitle title={name} />
              <ProductDetailDesc
                price={price}
                desc={description}
                handleCurrentProduct={handleCurrentProduct}
              />
            </div>
            <div className='product-photos'>{thumbnailProducts}</div>
          </div>
        </div>
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
    </Wrapper>
  );
};

export default ProductDetail;
