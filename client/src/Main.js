import React from "react";
import { Route, Switch } from "react-router-dom";

import Clothing from "./Clothing";
import About from "./About";
import Accessories from "./Accessories";
import Cart from "./Cart";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Clothing}></Route>
      <div style={{ height: 50 }}></div>
      <Route exact path="/about" component={About}></Route>
      <div style={{ height: 50 }}></div>
      <Route exact path="/accessories" component={Accessories}></Route>
      <div style={{ height: 50 }}></div>
      <Route exact path="/cart" component={Cart}></Route>
    </Switch>
  );
};

export default Main;
