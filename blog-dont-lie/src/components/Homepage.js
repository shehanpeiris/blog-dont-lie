import React from 'react';
import Ablock from "./Ablock";
import Card from "./Card";
import base from "../base";

class Homepage extends React.Component {
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
      if (postArr.length > 1) {
        this.setState({cards: postArr.slice(1)});
      }  
      // this.setState({posts: data.reverse()})
    } // Used arrow function to access state
  )};

  render() {
    return (
      <div className="App">
        <Ablock 
          image={this.state.ablock.image}
          alt={this.state.ablock.alt}
          link={this.state.ablock.link}
          headline={this.state.ablock.headline}
          blurb={this.state.ablock.blurb}
        />
        <div className="card-wrapper">
          {Object.keys(this.state.cards).map(key => (
            <Card
              key={key}  
              link={this.state.cards[key].link}
              image={this.state.cards[key].image}
              alt={this.state.cards[key].alt}
              headline={this.state.cards[key].headline}
              blurb={this.state.cards[key].blurb}
            />
          ))}
        </div>
        {/* <All_influential_team /> */}
      </div>
    );
  }
}

export default Homepage;