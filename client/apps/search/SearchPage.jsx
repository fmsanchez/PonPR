import React from 'react';

import SearchFilters from './SearchFilters';
import SearchForm from './SearchForm';

export default class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <SearchForm />
        <div className='row m-3'>
          <SearchFilters />
        </div>
      </div>
    );
  }
}
