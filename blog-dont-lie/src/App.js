import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Ablock from "./components/Ablock";
import Card from "./components/Card";
import base from "./base";
import All_influential_team from "./components/posts/1-all-influential-team/1-all-influential-team";

class App extends React.Component {
  state = {
    posts: {},
    cards: {},
    ablock: {}
  };

  componentDidMount() {
    this.getPosts();
  };

  getPosts() {
    base.fetch("posts", {
      asArray: true
    })
    .then(data => {
      const postArr = data.reverse();
      console.log(postArr);
      this.setState({ablock: postArr[0]})
      this.setState({cards: postArr.slice(1)});
      
      // this.setState({posts: data.reverse()})
    } // Used arrow function to access state
  )};

  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Ablock image={this.state.ablock.image} headline={this.state.ablock.headline} />
        <div className="card-wrapper">
          {Object.keys(this.state.cards).map(key => (
            <Card
              key={key}
              image={this.state.cards[key].image}
              headline={this.state.cards[key].headline}
            />
          ))}
        </div>
        <All_influential_team />
      </div>
    );
  }
}

export default App;
