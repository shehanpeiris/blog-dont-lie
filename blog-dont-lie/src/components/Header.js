import React from "react";
import banner from "./images/headerv3.png";
import Navbar from "./Navbar";
import classnames from "classnames";

class Header extends React.Component { 
  state = {
    visible: true,
    prevScrollPos: window.pageYOffset
  };

   // Adds an event listener when the component is mount.
   componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  handleScroll = () => {
    const {prevScrollPos} = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;
    this.setState({
      prevScrollPos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <div className="header">
        <img
          className={classnames("banner-image", {"banner-hidden": !this.state.visible})}
          src={banner} />
        <Navbar />
      </div>
    )
  };
};

export default Header;
