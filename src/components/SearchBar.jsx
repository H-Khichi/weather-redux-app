import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../redux/actions';
import debounce from 'lodash.debounce';

function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = debounce(() => {
    if (query) {
      dispatch(fetchWeatherData(query));
    }
  }, 500);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for weather..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
