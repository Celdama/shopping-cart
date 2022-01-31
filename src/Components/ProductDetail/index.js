import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../../productData';

import {
  Wrapper,
  Content,
  Image,
  Item,
  Thumbnail,
} from './productDetail.style';
import getCoverProductByKey from '../../Helpers/getCoverProductByKey';

const ProductDetail = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductImage, setCurrentProductImage] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [indexCurrentImage, setIndexCurrentImage] = useState(0);

  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    products.forEach((product) => {
      if (product.id === id) {
        setCurrentProduct(product);
        const allImagesProduct = getCoverProductByKey(product.name);

        setCurrentProductImage(allImagesProduct[0]);
        setIndexCurrentImage(0);
        setProductImages(allImagesProduct);
      }

      setAllProducts((prevState) => [...prevState, product]);
    });
  }, []);

  const handleCurrentProduct = (id, name) => {
    setCurrentProduct(products.find((product) => product.id === id));
    const currentProductImages = getCoverProductByKey(name);
    setCurrentProductImage(currentProductImages[0]);
    setProductImages(currentProductImages);
  };

  const handleChangeCurrentImage = (index) => {
    setCurrentProductImage(productImages[index]);
    setIndexCurrentImage(index);
  };

  return (
    <Wrapper>
      <Content>
        <div className='left'>
          <Image src={currentProductImage} />
        </div>
        <div className='right'>
          <div className='product-list'>
            <ul>
              {allProducts.map(({ name, id }) => {
                const isCurrent = name === currentProduct.name;
                return (
                  <Item
                    onClick={() => handleCurrentProduct(id, name)}
                    key={id}
                    current={isCurrent}
                  >
                    {name}
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
                  <Thumbnail
                    key={index}
                    isCurrent={index === indexCurrentImage ? true : false}
                    onClick={() => handleChangeCurrentImage(index)}
                    className='thumbnail'
                    src={src}
                    alt='#'
                  />
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
