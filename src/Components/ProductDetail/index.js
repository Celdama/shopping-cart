import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../productData';

import { Image } from './productDetail.style';

const ProductDetail = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [otherProducts, setOtherProducts] = useState([]);

  useEffect(() => {
    products.forEach((product) => {
      if (product.id === id) {
        setCurrentProduct(product);
      } else {
        setOtherProducts((prevState) => [...prevState, product]);
      }
    });
  }, []);

  console.log(currentProduct);
  console.log(otherProducts);

  return (
    <div>
      <div>
        <h3>{currentProduct.name}</h3>
        <p>${currentProduct.price}</p>
        <p>{currentProduct.description}</p>
        <Image
          img={`../../Images/products/${currentProduct.name}/mainImg.jpg`}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
