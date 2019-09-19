import React, { Component } from 'react';
import {
  BasicLayout,
  Products,
  Pagination,
  Carousel,
  Newsletter,
  NewsletterPopUp,
} from 'components';
import './style.css';

class Home extends Component {
  render() {
    return (
      <BasicLayout>
        <Carousel />
        <Products />
        <Pagination />
        <Newsletter />
        <NewsletterPopUp />
      </BasicLayout>
    );
  }
}

export default Home;
