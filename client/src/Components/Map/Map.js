import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const Company = ({ text }) => <div className="btn btn-primary">{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.2672,
      lng: -97.7431
    },
    zoom: 11
  };
  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAPLSKEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Company
            lat={30.27}
            lng={-97.75}
            text={process.env.REACT_APP_GOOGLEMAPLSKEY}
          />
          <Company
            lat={30.35}
            lng={-97.77}
            text="2"
          />
          <Company
            lat={30.22}
            lng={-97.75}
            text="3"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
