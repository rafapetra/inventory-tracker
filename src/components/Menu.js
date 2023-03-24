import React from "react";

function Menu(){
  const coffee1 = "Brazilian Coffee";
  const coffee2 = "Colombian Coffee";
  return (
    <React.Fragment>
      <p>{coffee1}</p>
      <p>{coffee2}</p>
      <hr/>
    </React.Fragment>
  );
}

export default Menu;