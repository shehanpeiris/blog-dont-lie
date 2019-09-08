import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#">Articles</a>
          <a href="#">Useful Resources</a>
          <a href="#">Pod Don't Lie</a>
          <a href="#">About</a>
        </div>
        {/* Narrow Nav for mobile screen */}
        {/* <div className="navNarrow">
          <i className="fa fa-bars fa-2x"></i>
            <div className="narrowLinks">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div> */}
      </nav>
    )
  };
};

export default Navbar;
