import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import All_influential_team from "./posts/1-all-influential-team/1-all-influential-team";

const Router = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/1-all-influential-team" component={All_influential_team} />
      </Switch>
  </BrowserRouter>
);

export default Router;
