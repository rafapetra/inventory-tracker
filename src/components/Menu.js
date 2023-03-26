import React from "react";
import './Menu.css';

function Menu(){
  const coffee1 = "Brazilian Coffee";
  const coffee2 = "Colombian Coffee";
  return (
    <React.Fragment>
      <div className="menu">
      Our Current Menu:<br></br>
      <p>{coffee1}</p>
      <p>{coffee2}</p>
      </div>
    </React.Fragment>
  );
}

export default Menu;