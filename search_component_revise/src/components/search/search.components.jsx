import React from 'react';
import '../search/search.styles.css';

export const Search = ({placeholder, changeHandler}) =>{
    return(
        <div>
          <input 
          className='search'
          type='search'
          placeholder= {placeholder}
          onChange={ changeHandler }
          />
        </div>
    )
}