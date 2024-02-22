import React from "react";
import image from "../../src/assests/meals.jpg";
const Header = () => {
  return (
    <>
      <div className="header">
        <h1>React 3mk</h1>
      </div>
      <div className="main-image">
        <img src={image} />
      </div>
    </>
  );
};

export default Header;
