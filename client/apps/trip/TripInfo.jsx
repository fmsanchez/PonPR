import React from "react";

export default class TripInfo extends React.Component {
  render() {
    return (
      <div className='border rounded p-3 mb-3'>
        <p className='h5 mb-3'>Mayagüez &rarr; San Juan</p>
        <div className='d-flex flex-row'>
          <div className='pr-3 mr-3'>
            <p className='h6 text-muted'>Salida</p>
            <p className='h6 pt-1 text-muted'>Destino</p>
            <p className='h6 pt-1 text-muted'>Fecha</p>
          </div>
          <div className=''>
            <p className='h6'>UPR Mayagüez</p>
            <p className='h6 pt-1'>Plaza Las Americas</p>
            <p className='h6 pt-1'>Mañana - 11:00am</p>
          </div>
        </div>
      </div>
    );
  }
}
