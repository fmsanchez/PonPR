import React from 'react';

import TripInfo from './TripInfo';
import TripPassengers from './TripPassengers';
import TripRequest from './TripRequest';

export default class TripPage extends React.Component {
  render() {
    return (
      <div className='p-3 border-right border-left d-flex flex-row'>
        <div className='col ml-0'>
          <TripInfo />
          <TripPassengers />
        </div>
        <div>
          <TripRequest />
        </div>
      </div>
    );
  }
}
