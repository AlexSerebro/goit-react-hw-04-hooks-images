import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    query: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  onSubmitHandler = e => {
    e.preventDefault();

    const query = this.state.query.trim();
    if (!query) {
      toast.error('Plz, enter search query', {
        position: 'top-right',
        autoClose: 2000,
        });
      return;
    }

    this.props.onSubmit(query);
    this.reset();
  };

  onInput = e => {
    const query = e.currentTarget.value;
    this.setState({ query });
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitHandler}>
          <button type="submit" className="SearchForm-button">
            <ImSearch style={{ marginRight: 8 }} />
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            onChange={this.onInput}
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
}

export default Searchbar;
