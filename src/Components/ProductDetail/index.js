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

const ProductDetail = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductImage, setCurrentProductImage] = useState([]);
  const [allProductsImages, setAllProductsImages] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [indexCurrentImage, setIndexCurrentImage] = useState(0);
  const [activeIndex, setActiveIndex] = useState('');

  const location = useLocation();
  const { id: locationId } = location.state;

  useEffect(() => {
    products.forEach((product) => {
      const { id, name } = product;
      if (id === locationId) {
        setCurrentProduct(product);
        const allImagesCurrentProduct = getCoverProductByKey(name);

        setAllProductsImages(allImagesCurrentProduct);
        setCurrentProductImage(allImagesCurrentProduct[0]);
        setIndexCurrentImage(0);
        setActiveIndex(currentProductImage.id);
      }

      !allProducts.length &&
        setAllProducts((prevState) => [...prevState, product]);
    });
  }, []);

  console.log(activeIndex);

  const handleCurrentProduct = (name) => {
    setCurrentProduct(products.find((product) => product.name === name));
    const currentProductImages = getCoverProductByKey(name);
    setCurrentProductImage(currentProductImages[0]);
    setAllProductsImages(currentProductImages);
    setIndexCurrentImage(0);
    setActiveIndex(currentProductImage.id);
  };

  const handleChangeCurrentImage = (index) => {
    setCurrentProductImage(allProductsImages[index]);
    setActiveIndex(currentProductImage.id);
    setIndexCurrentImage(index);
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

  const thumbnailProducts = allProductsImages.map((src, index) => {
    return (
      <Thumbnail
        key={index}
        isCurrent={index === indexCurrentImage}
        onClick={() => handleChangeCurrentImage(index)}
        className='thumbnail'
        src={src.img}
        alt='#'
      />
    );
  });

  const { name, price, description } = currentProduct;

  return (
    <Wrapper>
      <Content>
        <div className='left'>
          <Image key={activeIndex} src={currentProductImage.img} />
        </div>
        <div className='right'>
          <div className='product-list'>
            <ul>{listAllProducts}</ul>
          </div>

          <div className='product-info'>
            <div className='product-text'>
              <h3 className='product-name'>{name}</h3>
              <p className='product-price'>$ {price}.00 USD</p>
              <p className='product-desc'>{description}</p>
              <p className='product-marketing'>
                can't decide which flavor is right for you ? <br /> try our{' '}
                <span onClick={() => handleCurrentProduct('variety')}>
                  sample pack
                </span>
              </p>
              <button>add to card</button>
            </div>
            <div className='product-photos'>{thumbnailProducts}</div>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default ProductDetail;
