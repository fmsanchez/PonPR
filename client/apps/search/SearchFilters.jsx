import 'rc-slider/assets/index.css';

import React from 'react';

import Slider from 'rc-slider';

const Range = Slider.Range;

export default class SearchFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timeRange: [6, 18], priceRange: [0, 100], sortValue: 1};
  }

  formatTime(num) {
    let time = (num % 12).toString();
    time = time === '0' ? '12' : time;
    time += ':00';
    time += num < 12 ? 'am' : 'pm';
    return time;
  }

  formatPrice(price) {
    return '$' + price.toString();
  }

  getTimeRangeText(range) {
    return this.formatTime(range[0]) + ' - ' + this.formatTime(range[1]);
  }

  getPriceRangeText(range) {
    return this.formatPrice(range[0]) + ' - ' + this.formatPrice(range[1]);
  }

  render() {
    return (
      <div className='rounded border p-3 bg-light'>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <label className='input-group-text'>Ordernar</label>
          </div>
          <select
            value={this.state.sortValue}
            onChange={event => this.setState({sortValue: event.target.value})}
            className='custom-select'
            >
            <option value='1'>Precio: Menor &rarr; Mayor</option>
            <option value='2'>Precio: Mayor &rarr; Menor</option>
            <option value='3'>Salida: Temprano &rarr; Tarde</option>
            <option value='4'>Salida: Tarde &rarr; Temprano</option>
          </select>
        </div>
        <span>Hora de salida</span>
        <br />
        <span>{this.getTimeRangeText(this.state.timeRange)}</span>
        <form className='mt-2 mb-3'>
          <Range
            min={0}
            max={24}
            allowCross={false}
            defaultValue={this.state.timeRange}
            onChange={value => this.setState({timeRange: value})}
          />
        </form>
        <span>Costo</span>
        <br />
        <span>{this.getPriceRangeText(this.state.priceRange)}</span>
        <form className='mt-2'>
          <Range
            min={0}
            max={100}
            allowCross={false}
            defaultValue={this.state.priceRange}
            onChange={value => this.setState({priceRange: value})}
          />
        </form>

      </div>
    );
  }
}
