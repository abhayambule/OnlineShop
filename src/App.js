import React from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProductListing from "./component/ProductListing";
import ProductDetails from "./component/ProductDetails";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
