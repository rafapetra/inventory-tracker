import React from "react";
import Header from "./Header";

function App(){
  const coffee1 = "Brazilian Coffee";
  const coffee2 = "Colombian Coffee";
  return (
    <React.Fragment>
      <Header />
      <h3>{coffee1} and {coffee2}</h3>
      <hr/>
    </React.Fragment>
  );
}

export default App;
