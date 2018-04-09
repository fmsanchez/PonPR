import React from 'react';

import TripInfo from './TripInfo';
import TripPassengers from './TripPassengers';
import TripRequest from './TripRequest';
import TripDriver from './TripDriver';

export default class TripPage extends React.Component {
  render() {
    return (
      <div className='p-3 border-right border-left d-flex flex-row'>
        <div className='col ml-0'>
          <TripInfo />
          <TripDriver />
          <TripPassengers />
        </div>
        <div>
          <TripRequest />
        </div>
      </div>
    );
  }
}
