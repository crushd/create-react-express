import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CoinUsd extends Component {
    
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getCoin();
  }

  getCoin = () => {
    fetch('https://api.coingecko.com/api/v3/coins/' + this.props.coinId)
    .then(response => response.json())
    .then(data => this.setState({ 
      name: data.name,
      usd: data.market_data.current_price.usd
    }));
  }


    render() { 

        return ( 
            <div>
                <div>: </div>
                <Container>
                  <Row>
                    <Col>{this.state.name}</Col>
                    <Col>{this.state.usd}</Col>
                  </Row>
              </Container>;
            </div>
         );
    }
}
 
export default CoinUsd;