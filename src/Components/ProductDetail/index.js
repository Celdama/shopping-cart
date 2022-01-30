import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../productData';

import { Image } from './productDetail.style';
import getCoverProductByKey from '../../Helpers/getCoverProductByKey';

const ProductDetail = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [otherProducts, setOtherProducts] = useState([]);
  const [currentProductImage, setCurrentProductImage] = useState([]);
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    products.forEach((product) => {
      if (product.id === id) {
        setCurrentProduct(product);
        setProductImages(getCoverProductByKey(product.name));
        setCurrentProductImage(getCoverProductByKey(product.name)[0]);
      } else {
        setOtherProducts((prevState) => [...prevState, product]);
      }
    });
  }, []);

  return (
    <div>
      <div>
        <h3>{currentProduct.name}</h3>
        <p>${currentProduct.price}</p>
        <p>{currentProduct.description}</p>
        <Image src={currentProductImage} />

        {productImages.map((src) => {
          return <img src={src} alt='#' />;
        })}
      </div>
    </div>
  );
};

export default ProductDetail;
