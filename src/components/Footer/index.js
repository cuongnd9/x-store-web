import React from 'react';
import { Icon } from 'antd';
import './style.css';

function Footer() {
  return (
    <div className="f-container">
      <div className="f-main">
        <div className="f-left">
          <div className="f-info-item">
            <div className="f-icon-container">
              <Icon type="environment" className="f-icon" />
            </div>
            <div style={{ margin: 'auto 0', paddingBottom: '5px' }}>
              <small style={{ fontWeight: 'bold' }}>21 Revolation Street</small>
              <p style={{ fontWeight: 'bold', marginTop: '0px' }}>Paris, France</p>
            </div>
          </div>
          <div className="f-info-item">
            <div className="f-icon-container">
              <Icon type="phone" className="f-icon" />
            </div>
            <p style={{ fontWeight: 'bold', margin: 'auto 0' }}>+1 555 123456</p>
          </div>
          <div className="f-info-item">
            <div className="f-icon-container">
              <Icon type="mail" className="f-icon" />
            </div>
            <p style={{ fontWeight: 'bold', margin: 'auto 0' }}>support@macstore.com</p>
          </div>
        </div>
        <div className="f-right">
          <p style={{ fontWeight: 'bold', fontSize: '20px' }}>About X Store</p>
          <p style={{ margin: '30px 0', lineHeight: '25px' }}>
            Lorem mogetec vulputate dolor vel venenatis hendrerit. Praese ey lorem pharetra nec,
            mogetec vulputate dolor vel venenatis hendrerit. Praese ey mogetec vulputate mogetec
            vulputate dolor vel.
          </p>
        </div>
      </div>
      <div className="f-social">
        <a className="f-icon-container" href="https://github.com/cuongw/mac-store">
          <Icon className="f-icon f-icon-social" type="facebook" />
        </a>
        <a className="f-icon-container" href="https://github.com/cuongw/mac-store">
          <Icon className="f-icon f-icon-social" type="instagram" />
        </a>
        <a className="f-icon-container" href="https://github.com/cuongw/mac-store">
          <Icon className="f-icon f-icon-social" type="twitter" />
        </a>
        <a className="f-icon-container" href="https://github.com/cuongw/mac-store">
          <Icon className="f-icon f-icon-social" type="youtube" />
        </a>
      </div>
      <p style={{ textAlign: 'center' }}>
        <span role="img" aria-label="emoji">
          Made with Love by
          <a href="https://github.com/cuongw" style={{ color: '#f27c52' }}>
            {' '}
            Cuong
          </a>
        </span>
        <br />
        <small>© 2019 X Store</small>
      </p>
    </div>
  );
}

export default Footer;
