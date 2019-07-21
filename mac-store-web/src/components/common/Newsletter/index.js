import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import './style.css';

const { Search } = Input;

class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter">
        <div className="newsletter-icon">
          <img
            alt="newsletter-icon"
            src={`${process.env.PUBLIC_URL}/images/newsletter-white.png`}
          />
        </div>
        <div className="wrapped-newsletter-title">
          <p className="newsletter-title">Get our newsletter!</p>
        </div>
        <p className="newsletter-content">SCORE BIG DISCOUNTS, SPECIAL OFFERS, AND MORE!</p>
        <Search
          placeholder="Email"
          enterButton={<Icon type="mail" />}
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
    );
  }
}

export default Newsletter;
