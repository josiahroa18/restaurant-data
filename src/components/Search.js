import React from 'react';
import { Search } from './styledComponents';

export default ({searchInput, handleChange}) => {
    return (
        <Search>
            <input
                value={searchInput}
                onChange={handleChange}
            />
        </Search>
    )
}