import React from 'react';

import SearchFilters from './SearchFilters';
import SearchForm from './SearchForm';
import SearchList from './SearchList';

export default class SearchPage extends React.Component {
  render() {
    return (
      <div className='border-left border-right'>
        <SearchForm />
        <div className='container m-3'>
          <div className='row'>
            <div className='col-4'>
              <SearchFilters />
            </div>
            <div className='col-8'>
              <SearchList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
