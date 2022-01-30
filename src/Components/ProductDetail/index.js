import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../productData';

import { Wrapper, Content, Image, Item } from './productDetail.style';
import getCoverProductByKey from '../../Helpers/getCoverProductByKey';

const ProductDetail = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [otherProducts, setOtherProducts] = useState([]);
  const [currentProductImage, setCurrentProductImage] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    products.forEach((product) => {
      if (product.id === id) {
        setCurrentProduct(product);
        const productImages = getCoverProductByKey(product.name);
        setCurrentProductImage(productImages[0]);
        setProductImages(productImages);
      }
      // else {
      //   setOtherProducts((prevState) => [...prevState, product]);
      // }

      setAllProducts((prevState) => [...prevState, product]);
    });
  }, []);

  console.log(allProducts);

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
                return <Item current={isCurrent}>{product.name}</Item>;
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
              {productImages.map((src) => {
                return <img className='thumbnail' src={src} alt='#' />;
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
