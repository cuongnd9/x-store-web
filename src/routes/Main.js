import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, Footer } from 'components';
import { Home } from 'pages';

function Main() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default Main;
