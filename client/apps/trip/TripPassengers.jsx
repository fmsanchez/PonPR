import React from 'react'

import PassengerCard from './PassengerCard'

export default class TripPassengers extends React.Component {
  render() {
    return (
        <div className='border rounded'>
          <p className='h5 border-bottom p-3 mb-0'>Pasajeros</p>
          <div className='d-flex flex-row'>
            <PassengerCard />
            <PassengerCard />
            <PassengerCard />
            <PassengerCard />
            <PassengerCard />
          </div>
        </div>
    );
  }
}
