import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Map, TileLayer, Marker } from 'react-leaflet';

class LeafletMap extends Component {
  state = {
    show: this.props.show,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.show !== this.props.show) {
      this.setState({ show: this.props.show });
    }
  }

  render() {
    if (!this.state.show) {
      return 'nada';
    }
    return (
      <Map
        style={{ height: this.props.height }}
        center={[48, 3]}
        zoom={4}
        className={this.props.className}
      >
        <TileLayer url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png" />
      </Map>
    );
  }
}

export default LeafletMap;

LeafletMap.propTypes = {
  height: PropTypes.string,
  show: PropTypes.bool,
  className: PropTypes.any,
};
