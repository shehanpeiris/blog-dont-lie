import React from "react";
import banner from "./images/header.png";

class Header extends React.Component {
  render() {
    console.log(banner);
    return (
      <img src={banner} />
    )
  };
};

export default Header;
