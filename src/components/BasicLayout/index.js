import React from 'react';
import { Navbar, Footer } from 'components';
import './style.css';

function BasicLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}

export default BasicLayout;
