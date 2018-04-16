import React from 'react'

export default class PublishMap extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    var center = {lat: 18.234, lng: -66.453};
    var map = new google.maps.Map(this.mapRef.current, {
      zoom: 8.5,
      center: center
    });
    // var marker = new google.maps.Marker({
    //   position: uluru,
    //   map: map
    // });
  }

  render() {
    return (
      <div ref={this.mapRef} className='map-publish' id='map'></div>
    );
  }
}
