import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../../productData';

import { Wrapper, Content, Image, Item } from './productDetail.style';
import getCoverProductByKey from '../../Helpers/getCoverProductByKey';

const ProductDetail = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  // const [otherProducts, setOtherProducts] = useState([]);
  const [currentProductImage, setCurrentProductImage] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    products.forEach((product) => {
      if (product.id === id) {
        setCurrentProduct(product);
        console.log(currentProduct);
        console.log(getCoverProductByKey(product.name));
        const allImagesProduct = getCoverProductByKey(product.name);

        setCurrentProductImage(allImagesProduct[0]);
        setProductImages(allImagesProduct);
      }

      setAllProducts((prevState) => [...prevState, product]);
    });
  }, []);

  return (
    <Wrapper>
      <Content>
        <div className='left'>
          <Image src={currentProductImage} />
        </div>
        <div className='right'>
          <div className='product-list'>
            <ul>
              {allProducts.map((product) => {
                const isCurrent = product.name === currentProduct.name;
                // au click sur un produit ici, mettre à jour le currentProduct grâce à l'id !
                return (
                  <Item key={product.id} current={isCurrent}>
                    {product.name}
                  </Item>
                );
              })}
            </ul>
          </div>

          <div className='product-info'>
            <div className='product-text'>
              <h3 className='product-name'>{currentProduct.name}</h3>
              <p className='product-price'>$ {currentProduct.price}.00 USD</p>
              <p className='product-desc'>{currentProduct.description}</p>
              <p className='product-marketing'>
                can't decide which flavor is right for you ? <br /> try our
                sample pack
              </p>
              <button>add to card</button>
            </div>
            <div className='product-photos'>
              {productImages.map((src, index) => {
                return (
                  <img key={index} className='thumbnail' src={src} alt='#' />
                );
              })}
            </div>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

/*  */

export default ProductDetail;
