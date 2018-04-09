import React from 'react'

export default class TripDriver extends React.Component {
  render() {
    return (
        <div className='border rounded mb-3'>
          <p className='h5 border-bottom p-3 mb-0'>Conductor</p>
          <div className='d-flex flex-row'>

            <div className='p-2 d-flex flex-column col-fixed-124 align-items-center'>
              <div>
                <img
                  className='rounded-circle'
                  src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/p64x64/29101820_10212910793179317_8640824886396190720_n.jpg?_nc_cat=0&_nc_log=1&oh=07776baa457d94f4f9586634b0867ec4&oe=5B29A1B3'
                />
              </div>
              <span>4.6/5</span>
            </div>

            <div className='d-flex flex-column border-right mt-3 mb-3 pr-3'>
              <p className='h6'>Francisco S.</p>
              <p className='h7 text-muted'>24 años</p>
            </div>

            <div className='d-flex flex-column border-right mt-3 mb-3 pr-2 pl-2'>
              <small className='text-success'>Email válido</small>
              <small className='text-success'>Teléfono certificado</small>
            </div>

            <div className='d-flex flex-column border-right mt-3 mb-3 pr-2 pl-2'>
              <p className='h7 mb-1'>Carro</p>
              <p className='h6 text-muted'>Toyota Prius</p>
            </div>

          </div>
        </div>
    );
  }
}
