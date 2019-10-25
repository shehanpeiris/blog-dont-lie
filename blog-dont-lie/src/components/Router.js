import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import All_influential_team from "./posts/1-all-influential-team/1-all-influential-team";
import Lowry_iguodala from "./posts/2-lowry-iguodala/2-lowry-iguodala";

const Router = () => (
  <BrowserRouter>
      <Header />
      <Navbar />
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/1-all-influential-team" component={All_influential_team} />
          <Route exact path="/2-lowry-iguodala-bliss" component={Lowry_iguodala} />
      </Switch>
  </BrowserRouter>
);

export default Router;
