import React from "react";
import banner from "./images/header.png";

class Header extends React.Component {
  render() {
    return (
      <img className="banner-image" src={banner} />
    )
  };
};

export default Header;
