import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Row } from 'antd';
import { Navbar, Footer, Product } from './components';
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
        <Row>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Row>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
