import React from 'react'

export default class PublishCost extends React.Component {
  render() {
    return (
      <div className='border rounded mb-3'>
        <p className='h5 border-bottom p-2'>Costo y Pasajeros</p>
        <div className='d-flex flex-row p-2 align-items-center'>
          <span className='h7 no-wrap'>Costo por pasajero</span>
          <div className='input-group col-fixed-124 ml-auto'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>$</span>
            </div>
            <input className='form-control' />
          </div>
        </div>
        <div className='d-flex flex-row p-2 align-items-center'>
          <span className='h7 no-wrap'>Asientos disponibles</span>
          <div className='input-group col-fixed-72 ml-auto'>
            <select
              value='1'
              onChange={event => console.log(event.target.value)}
              className='custom-select ml-2'
              >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
