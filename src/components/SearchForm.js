import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { handleSubmit, setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className='section form'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search</label>
          <input
            placeholder='search'
            type='text'
            id='name'
            ref={searchValue}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
