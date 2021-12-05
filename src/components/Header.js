import React from "react";
import Typed from "react-typed";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Welcome</h1>
        <Typed
          className="typed-text"
          strings={[
            "We Are World Class",
            "World Class Assistants",
            "World Class Agents"
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
};

export default Header;
