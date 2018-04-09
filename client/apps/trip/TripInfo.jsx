import React from 'react';

export default class TripInfo extends React.Component {
  render() {
    let placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum ut mauris a feugiat. Phasellus ut tincidunt velit. Quisque laoreet posuere dui eget dignissim. In leo est, iaculis dignissim diam at, dapibus fermentum turpis. Nullam tortor ex, fermentum et quam ut, venenatis tincidunt ipsum. Morbi ac sapien vitae orci mattis ultricies et vitae tellus. Nam condimentum sem tortor. Morbi vitae quam at nunc venenatis vulputate nec ac leo. Duis et nisl at mauris pulvinar dapibus at sit amet erat. Nam et orci leo. Sed ac aliquam lorem. Donec sit amet justo vel leo eleifend ornare.';

    return (
      <div className='border rounded p-3 mb-3'>
        <p className='h5 mb-3'>Mayagüez &rarr; San Juan</p>
        <div className='d-flex flex-row'>
          <div className='pr-3 mr-3'>
            <p className='h6 text-muted'>Salida</p>
            <p className='h6 pt-1 text-muted'>Destino</p>
            <p className='h6 pt-1 text-muted'>Fecha</p>
            <p className='h6 pt-1 text-muted'>Descripción</p>
          </div>
          <div className=''>
            <p className='h6'>UPR Mayagüez</p>
            <p className='h6 pt-1'>Plaza Las Americas</p>
            <p className='h6 pt-1'>Mañana - 11:00am</p>
            <p className='h6 pt-1'>{placeholder}</p>
          </div>
        </div>
      </div>
    );
  }
}
