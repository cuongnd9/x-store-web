import React, { useState } from 'react';
import { Typography, Badge, Icon, Input } from 'antd';
import { Link } from '@reach/router';
import './style.css';

const { Text } = Typography;

function Navbar() {
  const [visibleSearch, setVisibleSearch] = useState('');

  const handleToggleSearchInput = () => {
    setVisibleSearch(!visibleSearch);
  };

  return (
    <nav className="menu">
      {!visibleSearch && (
        <Link to="/" className="logo">
          <img
            alt="X Store"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            className="logo-img"
          />
          <Text className="logo-text">
            <span className="logo-text-highlight">X</span>
            Store
          </Text>
        </Link>
      )}
      {!visibleSearch && (
        <div className="menu-items">
          <Link className="menu-item menu-item-active" to="/">
            Mac
          </Link>
          <Link className="menu-item" to="/">
            iPad
          </Link>
          <Link className="menu-item" to="/">
            iPhone
          </Link>
          <Link className="menu-item" to="/">
            Watch
          </Link>
          <Link className="menu-item" to="/">
            Support
          </Link>
        </div>
      )}
      <div className="menu-icons" style={{ width: visibleSearch ? '100%' : '40%' }}>
        {visibleSearch && (
          <>
            <Icon
              type="search"
              className="menu-icons-item"
              style={{ marginLeft: '0px', marginRight: '20px' }}
            />
            <Input
              type="text"
              placeholder="Enter your product..."
              size="large"
              className="search-input"
              required
            />
          </>
        )}
        <Icon
          type={visibleSearch ? 'close' : 'search'}
          className="menu-icons-item"
          style={{ color: visibleSearch && '#f27c52' }}
          onClick={handleToggleSearchInput}
        />
        <Badge dot>
          <Icon type="shopping-cart" className="menu-icons-item" />
        </Badge>
      </div>
    </nav>
  );
}

export default Navbar;
