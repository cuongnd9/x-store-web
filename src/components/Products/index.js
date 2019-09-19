import React from 'react';
import { Row } from 'antd';
import Product from '../Product';
import './style.css';

function Products() {
  return (
    <Row className="products">
      <Product />
      <Product />
      <Product />
      <Product />
    </Row>
  );
}

export default Products;
