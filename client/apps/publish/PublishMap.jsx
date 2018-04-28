import React from 'react'

export default class PublishMap extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    var center = {lat: 18.234, lng: -66.453};
    this.map = new google.maps.Map(this.mapRef.current, {
      zoom: 8.5,
      center: center
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // TODO: Cleanup and use prevProps to prevent unnecessary updates
    if (this.markerA && this.props.places.from) {
      this.markerA.setPosition({lat: this.props.places.from.geometry.location.lat(), lng: this.props.places.from.geometry.location.lng()});
    } else if (this.props.places.from) {
      this.markerA = new google.maps.Marker({
        position: {lat: this.props.places.from.geometry.location.lat(), lng: this.props.places.from.geometry.location.lng()},
        label: 'A',
        map: this.map,
      });
    }

    if (this.markerB && this.props.places.to) {
      this.markerB.setPosition({lat: this.props.places.to.geometry.location.lat(), lng: this.props.places.to.geometry.location.lng()});
    } else if (this.props.places.to) {
      this.markerB = new google.maps.Marker({
        position: {lat: this.props.places.to.geometry.location.lat(), lng: this.props.places.to.geometry.location.lng()},
        label: 'B',
        map: this.map,
      });
    }
    this.updateMapBounds();
  }

  updateMapBounds() {
    if (this.markerA && this.markerB) {
      var bounds = new google.maps.LatLngBounds();
      bounds.extend(this.markerA.getPosition());
      bounds.extend(this.markerB.getPosition());
      this.map.fitBounds(bounds);
    } else if (this.markerA) {
      this.map.setZoom(15);
      this.map.panTo(this.markerA.getPosition());
    } else if (this.markerB) {
      this.map.setZoom(15);
      this.map.panTo(this.markerB.getPosition());
    }
  }

  render() {
    return (
      <div ref={this.mapRef} className='map-publish' id='map'></div>
    );
  }
}
