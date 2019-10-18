import React from "react";
import {Link} from "react-router-dom";

class Ablock extends React.Component {

  render() {
    return (
      <Link to={this.props.link} className="a-block-link">
        <div className="a-block">
          <img className="a-block-image" src={this.props.image} alt="Virgil"></img>
          <section className="a-block-text">
            <h1 className="a-block-hed"><strong>{this.props.headline}</strong></h1>
            <p className="a-block-blurb">Calm as you like, he's Virgil van Dijk. The centre-back has emerged as one of the world's best with all-around brilliance that anchors the Liverpool defense.</p>
          </section>
        </div>
      </Link>
    )
  };
};

export default Ablock;