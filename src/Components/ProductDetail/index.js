import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
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
import { useSelector } from 'react-redux';
import { productsSelector } from '../../Store/selectors/productsSelector';
import { currentProductSelector } from '../../Store/selectors/currentProductSelector';
import { useDispatch } from 'react-redux';
import { incrementeProductQuantity } from '../../Store/actions/productsActions';
import { setCurrentProduct } from '../../Store/actions/currentProductAction';

export const ProductDetail = ({
  currentProduct,
  products,
  handleIncrementeQuantity,
  handdleSetCurrentProduct,
}) => {
  const [currentProductImage, setCurrentProductImage] = useState({});
  const [allProductsImages, setAllProductsImages] = useState([]);
  const [activeImgId, setActiveImgId] = useState('');

  const location = useLocation();
  const { id: locationId } = location.state || [];

  useEffect(() => {
    products.forEach((product) => {
      const { id, name } = product;
      if (id === locationId) {
        handdleSetCurrentProduct(product);
        setAllImages(getCoverProductByKey(name));
      } else if (locationId === undefined) {
        handdleSetCurrentProduct(products[0]);
        setAllImages(getCoverProductByKey(products[0].name));
      }
    });
  }, [locationId]);

  const setAllImages = (imgArray) => {
    setAllProductsImages(imgArray);
    setCurrentProductImage(imgArray[0]);
    setActiveImgId(imgArray[0].id);
  };

  const handleCurrentProduct = (name) => {
    handdleSetCurrentProduct(products.find((product) => product.name === name));
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

  const listAllProducts = products.map(({ name, id }) => {
    const isCurrent = name === currentProduct.name;
    return (
      <ProductDetailSavour
        key={id}
        color={colors[currentProduct.name]}
        name={name}
        handleCurrentProduct={() => handleCurrentProduct(name)}
        isCurrent={isCurrent}
      />
    );
  });

  const { name } = currentProduct;

  return (
    <Wrapper>
      <Content>
        <ProductListSmallScreen
          handleCurrentProduct={handleCurrentProduct}
          currentProduct={currentProduct}
          allProducts={products}
          color={colors[name]}
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
              <ProductDetailTitle
                currentProduct={currentProduct}
                currentProductImage={currentProductImage}
              />
              <ProductDetailDesc
                currentProduct={currentProduct}
                handleCurrentProduct={handleCurrentProduct}
                handleIncrementeQuantity={handleIncrementeQuantity}
              />
            </div>
            <ProductThumbnails
              color={colors[name]}
              currentProduct={currentProduct}
              productImages={allProductsImages}
              activeImgId={activeImgId}
              handleChangeCurrentImage={handleChangeCurrentImage}
            />
          </ProductInfo>
        </ProductDetailInfo>
      </Content>
      <Ingredient text='Zero Added Sugar' name={name} repeat={1} />
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
    </Wrapper>
  );
};

ProductDetail.propTypes = {
  addProductToCart: PropTypes.func,
};

export const ProductDetailStore = () => {
  const products = useSelector(productsSelector);
  const currentProduct = useSelector(currentProductSelector);

  const dispatch = useDispatch();

  const handleIncrementeQuantity = useCallback(
    (product) => {
      dispatch(incrementeProductQuantity(product));
    },
    [dispatch]
  );

  const handdleSetCurrentProduct = useCallback(
    (product) => {
      dispatch(setCurrentProduct(product));
    },
    [dispatch]
  );

  return (
    <ProductDetail
      products={products}
      currentProduct={currentProduct}
      handdleSetCurrentProduct={handdleSetCurrentProduct}
      handleIncrementeQuantity={handleIncrementeQuantity}
    />
  );
};
