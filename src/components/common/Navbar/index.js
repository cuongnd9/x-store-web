import React, { Component } from 'react';
import { Typography, Badge, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

const { Text } = Typography;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSearch: false,
    };
  }

  handleToggleSearchInput = () => {
    this.setState(state => ({ visibleSearch: !state.visibleSearch }));
  };

  render() {
    const { visibleSearch } = this.state;
    return (
      <nav className="menu">
        {!visibleSearch && (
          <Link to="/" className="logo">
            <img
              alt="Mac Store"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              className="logo-img"
            />
            <Text className="logo-text">
              <span className="logo-text-highlight">Mac</span>
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
            onClick={this.handleToggleSearchInput}
          />
          <Badge dot>
            <Icon type="shopping-cart" className="menu-icons-item" />
          </Badge>
        </div>
      </nav>
    );
  }
}

export default Navbar;
