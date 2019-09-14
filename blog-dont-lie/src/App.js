import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Ablock from "./components/Ablock";

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Ablock />
      </div>
    );
  }
}

export default App;
