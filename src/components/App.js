import React from "react";
import Header from "./Header";
import BagControl from "./BagControl";
import Menu from "./Menu";
import './App.css';


function App(){

  return (
    <div className="container">
    <React.Fragment>
      <Header />
      <Menu />
      <BagControl />
    </React.Fragment>
    </div>
  );
}

export default App;
