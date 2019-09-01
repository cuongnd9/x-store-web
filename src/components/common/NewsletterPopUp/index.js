import React, { Component } from 'react';
import { Modal, Input, Icon } from 'antd';
import './style.css';

const { Search } = Input;

class NewsletterPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const { visible } = this.state;
    return (
      <Modal
        visible={visible}
        closable
        bodyStyle={{ padding: 0 }}
        footer={null}
        onCancel={() => this.setState({ visible: false })}
      >
        <div className="newsletter">
          <div className="newsletter-icon">
            <img alt="newsletter-icon" src={`${process.env.PUBLIC_URL}/images/newsletter.png`} />
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
      </Modal>
    );
  }
}

export default NewsletterPopUp;
