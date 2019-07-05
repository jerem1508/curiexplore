import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class MapHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 2,
    };
  }
  render() {
    return(
      <div style={{ height: '100px', background: 'black' }}>
      </div>
    );
  }
}
