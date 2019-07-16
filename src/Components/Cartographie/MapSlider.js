import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Container, Row, Col } from 'react-bootstrap';

import classes from './Cartographie.scss';

const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0px 2px 2px',
    '&:focus,&:hover,&$active': {
      boxShadow: '#ccc 0px 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

function getMarks(yearInterval) {
  const marks = [];
  for (let i = yearInterval[0]; i <= yearInterval[1]; i += 1) {
    marks.push({ value: i, label: i });
  }
  return marks;
}

export default class MapSlider extends Component {
  constructor(props) {
    super(props);
    this.intervalId = 0;
    this.state = {
      icon: 'pause',
      value: 2008,
    };
    this.changeYear = this.changeYear.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }

  componentDidMount() {
    this.setState({ value: this.props.defaultYear }, () => {
      this.startTimer(this.state.value);
    });
  }

  changeYear(val) {
    this.setState({ value: val });
    this.props.changeYear(val);
  }

  startTimer(val) {
    let value = val;
    this.intervalId = setInterval(() => {
      if (value < this.props.yearInterval[1]) {
        value += 1;
      } else {
        value = this.props.yearInterval[0];
      }
      this.setState({ value });
      this.props.changeYear(value);
    }, 1500);
  }

  pauseTimer() {
    clearInterval(this.intervalId);
  }

  toggleButton() {
    const icon = this.state.icon;
    if (icon === 'play') {
      this.startTimer(this.state.value);
      this.setState({ icon: 'pause' });
    } else {
      this.pauseTimer();
      this.setState({ icon: 'play' });
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={1} />
          <Col sm={3}>
            <span style={{ marginRight: '20px' }}>Voir l&apos;évolution</span>
            <button className={classes.dot} type="button" onClick={this.toggleButton}><i className={`fas fa-${this.state.icon}`} /></button>
          </Col>
          <Col sm={7}>
            <AirbnbSlider
              defaultValue={this.props.defaultYear}
              aria-labelledby="discrete-slider-restrict"
              step={null}
              valueLabelDisplay="auto"
              marks={getMarks(this.props.yearInterval)}
              min={this.props.yearInterval[0]}
              max={this.props.yearInterval[1]}
              value={this.state.value}
              onChange={(e, val) => (this.changeYear(val))}
              ThumbComponent={AirbnbThumbComponent}
              aria-label="Airbnb slider"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

MapSlider.propTypes = {
  changeYear: propTypes.func.isRequired,
  defaultYear: propTypes.number.isRequired,
  yearInterval: propTypes.object.isRequired,
};
