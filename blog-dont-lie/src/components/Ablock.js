import React from "react";
import Virgil from "./images/virgil.jpg";

class Ablock extends React.Component {
  render() {
    return (
      <div className="a-block">
        <img className="a-block-image" src={Virgil} alt="Virgil"></img>
        <section className="a-block-text">
          <h3>Headline</h3>
          <p>Summary of the article goes here because it's going to be dope as fuck.</p>
        </section>
      </div>
    )
  };
};

export default Ablock;