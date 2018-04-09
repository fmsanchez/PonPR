import React from 'react'

export default class PublishRoute extends React.Component {
  render() {
    return (
      <div className='border rounded mb-3'>
        <p className='h5 border-bottom p-2'>Ruta</p>
        <div className='p-2'>
          <span className='h7 d-block'>Lugar de salida</span>
          <input type='text' className='form-control' />
        </div>
        <div className='p-2'>
          <span className='h7 d-block'>Destino</span>
          <input type='text' className='form-control' />
        </div>
      </div>
    );
  }
}
