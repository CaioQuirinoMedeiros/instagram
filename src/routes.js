import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Feed from "./pages/Feed";
import New from "./pages/New";

const Routes = () => (
  <Switch>
    <Route exact path="/instagram_web" component={Feed} />
    <Route path="/new" component={New} />
    <Redirect to="/instagram_web" />
  </Switch>
);

export default Routes;
