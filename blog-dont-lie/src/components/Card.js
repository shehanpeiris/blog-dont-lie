import React from "react";
import Virgil from "./images/virgil.jpg";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="card-image" src={this.props.image} alt="Virgil"></img>
        <div className="card-hed">
          <div className="card-hed-text">{this.props.headline}</div>
        </div>
        <div className="card-hover">
          <div className="card-hover-blurb">Exploring how VVD's all-around brilliance anchors the Liverpool defense.</div>
        </div>
      </div>
    )
  };
};

export default Card;