import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Col, Button, Icon } from 'antd';
import './style.css';

function Product() {
  const imageUrl =
    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com' +
    '/is/image/AppleInc/aos/published/images/m/bp/mbp13touch' +
    '/space/mbp13touch-space-select-201807?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1529520060550';

  const isNew = Math.random() > 0.5;

  const badgeIcon = (
    <p className="product-badge" style={{ backgroundColor: !isNew ? '#ff4d4f' : '#73d13d' }}>
      {!isNew ? '-20%' : 'New'}
    </p>
  );

  return (
    <Col sx={24} sm={12} md={8} lg={6} xl={6}>
      <div className="product">
        <Badge count={badgeIcon}>
          <img className="product-image" alt="Product" src={imageUrl} />
        </Badge>
        <Link className="product-name" to="/">
          MacBook Pro 2018 13-inch TouchBar
        </Link>
        <p className="price">$1,440.00</p>
        <p className="price sale-price">$1,800.00</p>
        <small style={{ padding: '10px' }}>
          <Icon type="star" theme="filled" style={{ color: '#fadb14' }} />
          <Icon type="star" theme="filled" style={{ color: '#fadb14' }} />
          <Icon type="star" theme="filled" style={{ color: '#fadb14' }} />
          <Icon type="star" theme="filled" style={{ color: '#fadb14' }} />
          <Icon type="star" />
          <span> (20)</span>
        </small>
        {Math.random() < 0.5 ? (
          <div className="btn-group">
            <Button type="primary" icon="eye" block>
              View Product
            </Button>
            <Button className="btn-favorite" type="danger" icon="heart" />
          </div>
        ) : (
          <p className="out-of-stock">Out of Stock</p>
        )}
      </div>
    </Col>
  );
}

export default Product;
