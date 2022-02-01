import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../../productData';
import getCoverProductByKey from '../../Helpers/getCoverProductByKey';
import {
  Wrapper,
  Content,
  Image,
  Item,
  Thumbnail,
} from './productDetail.style';

import ProductDetailTitle from '../ProductDetailTitle';
import ProductDetailDesc from '../ProductDetailDesc';

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

  const listAllProducts = allProducts.map(({ name, id }) => {
    const isCurrent = name === currentProduct.name;
    return (
      <Item
        onClick={() => handleCurrentProduct(name)}
        key={id}
        current={isCurrent}
      >
        {name}
      </Item>
    );
  });

  const thumbnailProducts = allProductsImages.map((src) => {
    const { id, img } = src;
    return (
      <Thumbnail
        key={id}
        isCurrent={id === activeImgId}
        onClick={() => handleChangeCurrentImage(src)}
        className='thumbnail'
        src={img}
        alt='thumbnail product'
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
    </Wrapper>
  );
};

export default ProductDetail;
