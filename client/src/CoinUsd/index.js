import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/row'
// import Col from 'react-bootstrap/col'

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

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
            <React.Fragment>
              <div className="row">
                <div className="col text-left">{this.state.name}</div>
                <div className="col text-right">{this.state.usd}</div>
                <div className="col text-right">{this.props.quantity}</div>
                <div className="col text-right"><NumberFormat value={this.state.usd * this.props.quantity} displayType={'text'} decimalScale={2} thousandSeparator={true} renderText={value => <div>{value}</div>} /></div>{/* prefix={'$'} */}
              </div>
              {/* <Container>
                <Row>
                  <Col>1 of 2</Col>
                  <Col>2 of 2</Col>
                </Row>
                <Row>
                  <Col>1 of 3</Col>
                  <Col>2 of 3</Col>
                  <Col>3 of 3</Col>
                </Row>
              </Container>; */}
            </React.Fragment>
         );
    }
}
 
export default CoinUsd;