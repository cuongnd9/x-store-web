import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Navbar, NotFound, Footer } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
