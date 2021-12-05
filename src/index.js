import { render } from "react-dom";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainClass from "./components/mainClass";
import MainFunctional from "./components/mainFunctional";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainClass />
        {/*<MainClass />*/}
        {/* <MainFunctional /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
//render(<App />, document.getElementById("root"));
