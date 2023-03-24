import React from "react";
import Header from "./Header";
import BagControl from "./BagControl";
import Menu from "./Menu";


function App(){

  return (
    <React.Fragment>
      <Header />
      <Menu />
      <BagControl />
    </React.Fragment>
  );
}

export default App;
