import React from 'react';
import { Container } from 'react-bootstrap';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

// const marks = [
//   {
//     value: 2008,
//     label: '2008',
//   },
//   {
//     value: 2017,
//     label: '2017',
//   },
// ];

function getMarks(yearInterval) {
  const marks = [];
  for (let i = yearInterval[0]; i <= yearInterval[1]; i += 1) {
    marks.push({ value: i, label: i });
  }
  return marks;
}

const MapSlider = props => (
  <Container>
    <Slider
      defaultValue={props.currYear}
      aria-labelledby="discrete-slider-restrict"
      step={null}
      valueLabelDisplay="auto"
      marks={getMarks(props.yearInterval)}
      min={props.yearInterval[0]}
      max={props.yearInterval[1]}
      onChange={(e, val) => (props.changeYear(val))}
    />
  </Container>
);

export default MapSlider;

MapSlider.propTypes = {
  changeYear: propTypes.func.isRequired,
  currYear: propTypes.number.isRequired,
  yearInterval: propTypes.object.isRequired,
};
