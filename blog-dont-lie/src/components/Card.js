import React from "react";
import Virgil from "./images/virgil.jpg";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="card-image" src={Virgil} alt="Virgil"></img>
        <h2 className="card-hed">The Brilliance of Virgil van Dijk</h2>
        {/* <p>Exploring how VVD's all-around brilliance anchors the Liverpool defense.</p> */}
      </div>
    )
  };
};

export default Card;