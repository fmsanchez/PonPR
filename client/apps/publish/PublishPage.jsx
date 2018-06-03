import React from 'react';

import PublishRoute from './PublishRoute';
import PublishTime from './PublishTime';
import PublishCost from './PublishCost';
import PublishMap from './PublishMap';
import PublishDescription from './PublishDescription';

export default class PublishPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fromPlace: undefined, toPlace: undefined};
    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);
  }

  onChangeFrom(place) {
    if (!place || !place.name) {
      return;
    }
    this.setState({fromPlace: place});
  }

  onChangeTo(place) {
    if (!place || !place.name) {
      return;
    }
    this.setState({toPlace: place});
  }

  render() {
    return (
      <div className='border-left border-right p-3'>
        <p className='h3 mb-3'>Pubicar Viaje</p>
        <div className='d-flex flex-row'>
          <div className='d-flex flex-column col p-0 ml-0 mr-3'>
            <PublishRoute
              onChangeFrom={this.onChangeFrom}
              onChangeTo={this.onChangeTo}
              places={{from: this.state.fromPlace, to: this.state.toPlace}}
            />
            <PublishDescription />
            <PublishTime />
            <PublishCost />
            <button class="btn btn-primary">Publicar</button>
          </div>
          <div className='d-flex flex-column ml-3'>
            <PublishMap places={{from: this.state.fromPlace, to: this.state.toPlace}} />
          </div>
        </div>
      </div>
    );
  }
}
