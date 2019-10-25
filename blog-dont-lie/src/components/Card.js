import React from "react";
import {Link} from "react-router-dom";


class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <Link to={this.props.link} className="card-link">
          <img className="card-image" src={this.props.image} alt="Virgil"></img>
          <div className="card-hed">
            <div className="card-hed-text">{this.props.headline}</div>
          </div>
          <div className="card-hover">
            <div className="card-hover-blurb">{this.props.blurb}</div>
          </div>
        </Link>
      </div>
    )
  };
};

export default Card;