import React from 'react';
import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./components/Homepage";
import All_influential_team from "./components/posts/1-all-influential-team/1-all-influential-team";
import Lowry_iguodala from "./components/posts/2-lowry-iguodala/2-lowry-iguodala";
import Luka_trae from "./components/posts/3-luka-trae/3-luka-trae";
import Lpdl_nov7 from "./components/posts/4-lpdl-nov-7/4-lpdl-nov-7";
import Phoenix_suns from "./components/posts/5-phoenix-suns/5-phoenix-suns";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          {/* <Navbar /> */}
          <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/1-all-influential-team" component={All_influential_team} />
              <Route exact path="/2-lowry-iguodala-bliss" component={Lowry_iguodala} />
              <Route exact path="/3-luka-trae-one-pass-away" component={Luka_trae} />
              <Route exact path="/4-lpdl-danny-green-league-pass-kyle-oquinn" component={Lpdl_nov7} />
              <Route exact path="/5-phoenix-suns-hot-start" component={Phoenix_suns} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
