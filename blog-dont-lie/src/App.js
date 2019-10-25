import React from 'react';
import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import All_influential_team from "./components/posts/1-all-influential-team/1-all-influential-team";
import Lowry_iguodala from "./components/posts/2-lowry-iguodala/2-lowry-iguodala";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          {/* <Navbar /> */}
          <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/1-all-influential-team" component={All_influential_team} />
              <Route exact path="/2-lowry-iguodala-bliss" component={Lowry_iguodala} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
