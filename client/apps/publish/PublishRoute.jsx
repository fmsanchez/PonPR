import React from 'react'

export default class PublishRoute extends React.Component {
  constructor(props) {
    super(props);
    this.fromRef = React.createRef();
    this.toRef = React.createRef();
    this.fromChange = this.fromChange.bind(this);
    this.toChange = this.toChange.bind(this);
  }

  componentDidMount() {
    let options = {
      componentRestrictions: {country: 'pr'}
    };
    this.fromAutocomplete = new window.google.maps.places.Autocomplete(
      this.fromRef.current,
      options,
    );
    this.toAutocomplete = new window.google.maps.places.Autocomplete(
      this.toRef.current,
      options,
    );

    this.fromAutocomplete.addListener('place_changed', this.fromChange);
    this.toAutocomplete.addListener('place_changed', this.toChange);
  }

  fromChange() {
    this.props.onChangeFrom(this.fromAutocomplete.getPlace());
  }

  toChange() {
    this.props.onChangeTo(this.toAutocomplete.getPlace());
  }


  render() {
    let fromText = this.props.places.from ? this.props.places.from.name : undefined;
    return (
      <div className='border rounded mb-3'>
        <p className='h5 border-bottom p-2'>Ruta</p>
        <div className='p-2'>
          <span className='h7 d-block'>Lugar de salida</span>
          <input
            type='text'
            ref={this.fromRef}
            className='form-control'
          />
        </div>
        <div className='p-2'>
          <span className='h7 d-block'>Destino</span>
          <input
            type='text'
            ref={this.toRef}
            className='form-control'
          />
        </div>
      </div>
    );
  }
}
