import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Page404 } from './pages';
import { Navbar, Footer } from './components';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
