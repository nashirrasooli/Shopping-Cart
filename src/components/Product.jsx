import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import { useSelector } from 'react-redux';
import { getProducts } from '../store/productSlice';
import Alert from 'react-bootstrap/Alert';
import StatusCode from '../utils/StatusCode';

function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    //   .then((data) => data.json())
    //   .then((res) => setProduct(res));

    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === StatusCode.ERROR) {
    return (
      <Alert
        key='danger'
        variant='danger'
      >
        Something went wrong. Try again Later
      </Alert>
    );
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards =
    products &&
    products.map((product) => (
      <div
        className='col-md-3'
        style={{ marginBottom: '10px' }}
      >
        <Card
          key={product.id}
          className='h-100'
        >
          <div className='text-center'>
            <Card.Img
              variant='top'
              src={product.image}
              style={{ width: '100px', height: '130px' }}
            />
          </div>

          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>AFN: {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: 'white' }}>
            <Button
              variant='primary'
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className='row'>{cards}</div>
    </>
  );
}

export default Product;
