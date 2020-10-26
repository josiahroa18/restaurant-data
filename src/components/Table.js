import React, { useState } from 'react';
import generateFilteredState from '../utils/generateFilteredState';

import { Table } from './styledComponents';
import Search from './Search';
import Row from './Row';

export default props => {
    const {
        restaurantData,
        stateOptions,
        genreOptions
    } = props;

    const [ searchInput, setSearchInput ] = useState('');

    const handleChange = e => {
        setSearchInput(e.target.value);
    }

    const filteredState = generateFilteredState(restaurantData, stateOptions, genreOptions, searchInput);

    return (
        <Table>
            <Search
                searchInput={searchInput}
                handleChange={handleChange}
            />
            <Row isHeader={true}/>
            {filteredState.map(restaurant => {
                return <Row restaurant={restaurant} key={restaurant.id}/>
            })}
        </Table>
    );
}