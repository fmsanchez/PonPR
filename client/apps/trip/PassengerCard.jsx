import React from 'react'

export default class PassengerCard extends React.Component {
  render() {
    if (!this.props.user) {
      return (
        <div
          className='p-2 border-right d-flex flex-column col-fixed-124 bg-light'
        />
      );
    }
    return (
      <div className='p-2 border-right d-flex flex-column col-fixed-124 align-items-center'>
        <div>
          <img
            className='rounded-circle'
            src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/p64x64/29101820_10212910793179317_8640824886396190720_n.jpg?_nc_cat=0&_nc_log=1&oh=07776baa457d94f4f9586634b0867ec4&oe=5B29A1B3'
          />
        </div>
        <span>Francisco S.</span>
        <small>24 años</small>
      </div>
    );
  }
}
