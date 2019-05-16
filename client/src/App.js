import React, { Component } from "react";
//import logo from "./logo.svg";
import CoinUsd from "./CoinUsd";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoinUsd coinId={'bitcoin'} />
        <CoinUsd coinId={'ripple'} />
        <CoinUsd coinId={'ethereum'} />
      </div>
    );
  }
}

export default App;
