import React from "react";
import Homepage from "./pages/homepage";
import Shop from "./pages/shop";
import Header from "./components/header";
import Sign from "./pages/sign";
import { Switch, Route } from "react-router-dom";

export default () => (
  <>
  <Header/>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/signin" component={Sign} />
    </Switch>
  </>
);

