import { useState } from 'react';
import propTypes from 'prop-types';
import css from './Searchbar.module.css'
import { FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Searchbar= ({onSubmit}) => {
 const [query, setQuery] = useState('')

 const handleChange = e => {
    setQuery(e.target.value.toLowerCase().trim());
  };

 const handleSubmit = event => {
    event.preventDefault();

    if (query === '') {
      toast.error('Enter what you want to find please');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

    return (
      <header className={css.Searchbar}>
        <form
          className={css.SearchForm}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <button type="submit" className={css.SearchForm_button}>
            <FiSearch size={25} stroke="#3f51b5" />
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={query}
          />
        </form>
      </header>
    );
  }

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
