import React from 'react';

export default class SearchListItem extends React.Component {
  render() {
    return (
      <div className='container border rounded clickable-item p-2 mb-2'>
        <div className='row justify-content-start'>
          <div className='col-auto pr-2'>
            <img
              className='rounded-circle'
              src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/p64x64/29101820_10212910793179317_8640824886396190720_n.jpg?_nc_cat=0&_nc_log=1&oh=07776baa457d94f4f9586634b0867ec4&oe=5B29A1B3'
            />
            <br/>
            <span className='w-100'>4.5/5</span>
          </div>
          <div className='col-auto border-right pl-1'>
            <span>Francisco S.</span>
            <br/>
            <span>24 años</span>
            <br/>
            <span>15 viajes</span>
          </div>
          <div className='col'>
            <p className='h5 p-0 m-0'>Mañana - 1:00pm</p>
            <p className='h6 text-muted'>Mayagüez &rarr; San Juan</p>
            <p className='p-0 m-0'>Salida: <small className='text-muted'>UPR Mayagüez</small></p>
            <p className='p-0 m-0'>Llegada: <small className='text-muted'>Plaza Las Americas</small></p>
          </div>
          <div className='col-auto float-right border-left'>
            <p className='h3'>$20.00 <small className='text-muted'>p.p.</small></p>
            <p className='h5 p-0 m-0'>2 <small className='text-muted'>espacios disponibles</small></p>
          </div>
        </div>
      </div>
    );
  }
}
