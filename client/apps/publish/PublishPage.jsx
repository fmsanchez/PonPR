import React from 'react';

import PublishRoute from './PublishRoute';
import PublishTime from './PublishTime';
import PublishCost from './PublishCost';
import PublishMap from './PublishMap';

export default class PublishPage extends React.Component {
  render() {
    return (
      <div className='border-left border-right p-3'>
        <p className='h3 mb-3'>Pubicar Viaje</p>
        <div className='d-flex flex-row'>
          <div className='d-flex flex-column col p-0 ml-0 mr-3'>
            <PublishRoute />
            <PublishTime />
            <PublishCost />
          </div>
          <div className='d-flex flex-column ml-3'>
            <PublishMap />
          </div>
        </div>
      </div>
    );
  }
}
