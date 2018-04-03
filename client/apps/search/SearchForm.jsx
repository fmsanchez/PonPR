import React from "react";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.fromRef = React.createRef();
    this.toRef = React.createRef();
  }

  componentDidMount() {
    let options = {
      types: ['(cities)'],
      componentRestrictions: {country: 'pr'}
    };
    console.log(google.maps.places);
    const fromAutocomplete = new window.google.maps.places.Autocomplete(
      this.fromRef.current,
      options,
    );
    const toAutocomplete = new window.google.maps.places.Autocomplete(
      this.toRef.current,
      options,
    );
  }

  render() {
    return (
      <form className="form-inline bg-light">
        <div className="input-group m-1">
          <div className="input-group-prepend">
            <span className="input-group-text">De</span>
          </div>
          <input ref={this.fromRef} className="form-control" />
        </div>
        <div className="input-group m-1">
          <div className="input-group-prepend">
            <span className="input-group-text">A</span>
          </div>
          <input ref={this.toRef} className="form-control" />
        </div>
        <div className="input-group m-1">
          <div className="input-group-prepend">
            <span className="input-group-text">Fecha</span>
          </div>
          <input className="form-control" />
        </div>
        <button className="btn btn-primary m-1 pl-3 pr-3">Buscar</button>
      </form>
    );
  }
}
