import React from "react";
import banner from "./images/headerv3.png";

class Header extends React.Component {
  render() {
    return (
      <img className="banner-image" src={banner} />
    )
  };
};

export default Header;
