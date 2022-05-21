import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify';

function Searchbar({onSubmit}) {
  const [query, setQuery] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();

    const queryTrim = query.trim();
    if (!queryTrim) {
      toast.error('Plz, enter search query', {
        position: 'top-right',
        autoClose: 2000,
        });
      return;
    }

    onSubmit(queryTrim);
    setQuery('');
  };

  const onInput = e => {
    setQuery(e.currentTarget.value);
    
  };

   return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmitHandler}>
          <button type="submit" className="SearchForm-button">
            <ImSearch style={{ marginRight: 8 }} />
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            onChange={onInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
          />
        </form>
      </header>
    );
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};


