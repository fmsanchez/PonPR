import React from 'react'

export default class TripRequest extends React.Component {
  render() {
    return (
      <div className='border rounded col-fixed-340 d-flex flex-column'>
        <div className='p-3 border-bottom d-flex flew-row align-items-end justify-content-between'>
          <p className='h5 text-muted'>Costo por persona</p>
          <p className='h3'>$20.00</p>
        </div>
        <div className='p-3 text-center border-bottom'>
          <p className='h5 m-0'>
            3 <small className='text-muted'>asientos disponibles</small>
          </p>
        </div>
        <div className='p-3'>
          <select className='custom-select mb-4'>
            <option value='1'>1 asiento</option>
            <option value='2'>2 asientos</option>
            <option value='3'>3 asientos</option>
          </select>
          <button type="button" className="btn btn-success col p-2">Solicitar</button>
        </div>
      </div>
    );
  }
}
