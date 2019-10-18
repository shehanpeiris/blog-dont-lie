import React from "react";
import banner from "./images/headerv3.png";
import Navbar from "./Navbar";

class Header extends React.Component { 
  render() {
    return (
      <div className="header">
        <img className="banner-image" src={banner} />
        <Navbar />
      </div>
    )
  };
};

export default Header;
