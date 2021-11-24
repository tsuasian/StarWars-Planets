import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class CardBootstrap extends Component {
  render () {
    return (
      <Card style={{ overflow:'auto', width:'100%', textAlign:'center'}}>
        <Card.Body>
            {this.props.table}
        </Card.Body>
      </Card>
    )
  }
}

export default CardBootstrap;


//
// <Card.Text>
//   Some quick example text to build on the card title and make up the bulk of
//   the card's content.
// </Card.Text>
