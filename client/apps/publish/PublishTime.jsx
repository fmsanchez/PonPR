import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class PublishTime extends React.Component {
  render() {
    return (
      <div className='border rounded mb-3'>
        <p className='h5 border-bottom p-2'>Horario</p>
        <div className='p-2'>
          <span className='h7 d-block mb-2'>Fecha de salida</span>
          <div className='d-flex flex-row align-items-end'>
            <DatePicker
              dateFormat="L"
              selected={moment('1', 'add_day')}
              onChange={date => console.log({selectedDate: date})}
              minDate={moment('1', 'add_day')}
              locale='es'
              className='form-control col-fixed-124 mr-3'
            />
            <select
              value='12'
              onChange={event => console.log(event.target.value)}
              className='custom-select col-fixed-72 ml-2 mr-1'
              >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
            </select>
            <span>h</span>
            <select
              value='0'
              onChange={event => console.log(event.target.value)}
              className='custom-select col-fixed-72 ml-2 mr-1'
              >
              <option value='0'>00</option>
              <option value='15'>15</option>
              <option value='30'>30</option>
              <option value='45'>45</option>
            </select>
            <span>m</span>
            <select
              value='PM'
              onChange={event => console.log(event.target.value)}
              className='custom-select col-fixed-72 ml-2'
              >
              <option value='AM'>AM</option>
              <option value='PM'>PM</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
