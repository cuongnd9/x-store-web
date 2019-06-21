import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Row } from 'antd';
import { Navbar, Footer, Product, Pagination, Carousel } from './components';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        {/* <Switch>
          <Route path="*" component={NotFound} />
        </Switch> */}
        <Carousel />
        <Row className="products">
          <Product />
          <Product />
          <Product />
          <Product />
        </Row>
        <Pagination />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
