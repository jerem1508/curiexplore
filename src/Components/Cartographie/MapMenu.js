import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default class MapHeader extends Component {
  constructor(props) {
    super(props);
    this.source = 'Unesco';
    this.state = {
      zoom: 2,
    };
  }

  render() {
    function getSelect() {
      // On génère la liste en fonction du fichier de conf
      // const selectList = [];
      // for (let i = 0; i < params[this.props.graphType].length; i += 1) {
      //   selectList.push(<option value={params[this.props.graphType][i].name}>{params[this.props.graphType][i].label}</option>);
      // }
      // return (
      //   <select onChange={props.handleIndic} value={props.value} className="form-control">
      //     {selectList}
      //   </select>
      // );
      return (
        <select>
          <option value="test">Coucou</option>
        </select>
      );
    }
    return (
      <Container>
        <Row>
          <Col sm={1} />
          <Col sm={5}>
            <span>Sélectionner un indicateur</span>
            <p>{getSelect()}</p>
            <span>
              Source:&nbsp;
              {this.source}
            </span>
          </Col>
          <Col sm={5}>
            Complément de légende
            ligne1
            ligne2
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}
