import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages';
import { Navbar, Footer } from './components';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
