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
          {Object.keys(this.state.posts).map(key => (
            <Card
              key={key}
              image={this.state.posts[key].image}
              headline={this.state.posts[key].headline}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
