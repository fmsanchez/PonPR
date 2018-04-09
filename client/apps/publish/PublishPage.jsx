import React from 'react';

import PublishRoute from './PublishRoute';
import PublishTime from './PublishTime';
import PublishCost from './PublishCost';

export default class PublishPage extends React.Component {
  render() {
    return (
      <div className='border-left border-right p-3'>
        <p className='h3 mb-3'>Pubicar Viaje</p>
        <div className='d-flex flex-row'>
          <div className='d-flex flex-column'>
            <PublishRoute />
            <PublishTime />
            <PublishCost />
          </div>
        </div>
      </div>
    );
  }
}
