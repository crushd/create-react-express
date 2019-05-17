import React, { Component } from "react";
//import logo from "./logo.svg";
import CoinUsd from "./CoinUsd";
import "./App.css";

const coinList = [
  "bitcoin",
  "ripple",
  "ethereum",
  "neo",
  "ong",
  "ont"
]

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <div className="row">
          <div className="col">&nbsp;</div>
          <div className="col text-right font-weight-bold">USD</div>
          <div className="col text-right font-weight-bold">Qty</div>
          <div className="col text-right font-weight-bold">Subtotal</div>
        </div>
        {coinList.map(coin => <CoinUsd key={coin} coinId={coin} quantity={42} />)}
        <CoinUsd coinId={'bitcoin'} quantity={42} />
        <CoinUsd coinId={'ripple'} quantity={42} />
        <CoinUsd coinId={'ethereum'} quantity={42} />
        {console.log(coinList)}
      </div>
    );
  }
}

export default App;
