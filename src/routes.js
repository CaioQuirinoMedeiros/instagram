import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Feed from "./pages/Feed";
import New from "./pages/New";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/new" component={New} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
