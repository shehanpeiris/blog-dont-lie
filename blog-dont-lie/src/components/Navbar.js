import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav"> 
          <li><a href="/"><i class="fas fa-home"></i> Home</a></li>
          <li><a href="#"><i class="fas fa-pen-fancy"></i> Articles</a></li>
          <li><a href="#"><i class="fas fa-toolbox"></i> Useful Resources</a></li>
          <li><a href="#"><i class="fas fa-headphones"></i> Pod Don't Lie</a></li>
          <li><a href="#"><i class="fas fa-basketball-ball"></i> About</a></li>
        </ul>
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
