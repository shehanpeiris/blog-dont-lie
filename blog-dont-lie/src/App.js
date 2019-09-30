import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Ablock from "./components/Ablock";
import Card from "./components/Card";
import base from "./base";

class App extends React.Component {
  state = {
    posts: {}
  };

  componentDidMount() {
    base.bindToState("posts", {
      context: this,
      state: "posts",
      asArray: true
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Ablock />
        <div className="card-wrapper">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
