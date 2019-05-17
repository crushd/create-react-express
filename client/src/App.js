import React, { Component } from "react";
import CoinUsd from "./CoinUsd";
import "./App.css";

const coinList = [
  "bitcoin",
  "ripple",
  "ethereum",
  "neo",
  "ong",
  "ontology"
]

class App extends Component {

  state = {
    "portfolioTotal": 0
  }

  render() {
    return (
      <div className="App container-fluid">
      
        <div className="row">
          <div className="col">&nbsp;</div>
          <div className="col text-right font-weight-bold">USD</div>
          <div className="col text-right font-weight-bold">Qty</div>
          <div className="col text-right font-weight-bold">Subtotal</div>
        </div>
        {coinList.map(coin => <CoinUsd key={coin} coinId={coin} quantity={42} />)}
        <div className="row">
          <div className="col">&nbsp;</div>
          <div className="col">&nbsp;</div>
          <div className="col">&nbsp;</div>
          <div className="col text-right font-weight-bold">{this.state.portfolioTotal}</div>
        </div>
      </div>
    );
  }
}


export default App;
