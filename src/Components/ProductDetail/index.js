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
import { useSelector, useDispatch } from 'react-redux';
import { productsSelector } from '../../Store/selectors/productsSelector';
import { currentProductSelector } from '../../Store/selectors/currentProductSelector';
import { incrementeProductQuantity } from '../../Store/actions/productsActions';
import { setCurrentProduct } from '../../Store/actions/currentProductAction';
import { toggleDisplayCart } from '../../Store/actions/displayCartAction';
import { displayCartSelector } from '../../Store/selectors/displayCartSelector';

export const ProductDetail = ({
  currentProduct,
  products,
  displayCart,
  handleIncrementeQuantity,
  handleSetCurrentProduct,
  handleDisplayCart,
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
        handleSetCurrentProduct(product);
        setAllImages(getCoverProductByKey(name));
      } else if (!locationId) {
        handleSetCurrentProduct(products[0]);
        setAllImages(getCoverProductByKey(products[0].name));
      }
    });
  }, [locationId, handleSetCurrentProduct, products]);

  const setAllImages = (imgArray) => {
    setAllProductsImages(imgArray);
    setCurrentProductImage(imgArray[0]);
    setActiveImgId(imgArray[0].id);
  };

  const handleCurrentProduct = (product) => {
    handleSetCurrentProduct(product);
    setAllImages(getCoverProductByKey(product.name));
  };

  const handleChangeCurrentImage = (img) => {
    const { id } = img;
    setCurrentProductImage(img);
    setActiveImgId(id);
  };

  const listAllProducts = products.map((product) => {
    const { id, name } = product;
    return (
      <ProductDetailSavour
        product={product}
        key={id}
        handleCurrentProduct={handleCurrentProduct}
        isCurrent={name === currentProduct.name}
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
          products={products}
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
                products={products}
                currentProduct={currentProduct}
                displayCart={displayCart}
                handleCurrentProduct={handleCurrentProduct}
                handleIncrementeQuantity={handleIncrementeQuantity}
                handleDisplayCart={handleDisplayCart}
              />
            </div>
            <ProductThumbnails
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
  products: PropTypes.array,
  currentProduct: PropTypes.object,
  handleSetCurrentProduct: PropTypes.func,
  handleIncrementeQuantity: PropTypes.func,
  handleDisplayCart: PropTypes.func,
};

export const ProductDetailStore = () => {
  const products = useSelector(productsSelector);
  const currentProduct = useSelector(currentProductSelector);
  const displayCart = useSelector(displayCartSelector);

  const dispatch = useDispatch();

  const handleIncrementeQuantity = useCallback(
    (product) => {
      dispatch(incrementeProductQuantity(product));
    },
    [dispatch]
  );

  const handleSetCurrentProduct = useCallback(
    (product) => {
      dispatch(setCurrentProduct(product));
    },
    [dispatch]
  );

  const handleDisplayCart = useCallback(() => {
    dispatch(toggleDisplayCart());
  }, [dispatch]);

  return (
    <ProductDetail
      products={products}
      currentProduct={currentProduct}
      displayCart={displayCart}
      handleSetCurrentProduct={handleSetCurrentProduct}
      handleIncrementeQuantity={handleIncrementeQuantity}
      handleDisplayCart={handleDisplayCart}
    />
  );
};
