import React, { useState } from 'react';
import generateFilteredState from '../utils/generateFilteredState';

import { Table } from './styledComponents';
import Search from './Search';
import Row from './Row';
import PageNavigator from './PageNavigator';

export default props => {
    const {
        restaurantData,
        stateOptions,
        genreOptions
    } = props;


    const [ searchInput, setSearchInput ] = useState('');
    const [ currentPage, setCurrentPage ] = useState(1);

    const RESULTS_PER_PAGE = 10;
    const LAST_RESULT_INDEX = currentPage * RESULTS_PER_PAGE;
    const FIRST_RESULT_INDEX = LAST_RESULT_INDEX - RESULTS_PER_PAGE;

    const handleInputChange = e => {
        setSearchInput(e.target.value);
    }

    const handlePageChange = pageNumber => {
        setCurrentPage(pageNumber)
    }

    const filteredState = generateFilteredState(restaurantData, stateOptions, genreOptions, searchInput);
    const paginatedState = filteredState.slice(FIRST_RESULT_INDEX, LAST_RESULT_INDEX);

    const pageNumbers = [];
    const MAX_PAGES = Math.ceil(filteredState.length / RESULTS_PER_PAGE);
    for(let i=1; i <= MAX_PAGES; i++){
        pageNumbers.push(i);
    }

    return (
        <Table>
            <div className='top-wrapper'>
                <PageNavigator
                    currentPage={currentPage}
                    pageNumbers={pageNumbers}
                    handleChange={handlePageChange}
                />
                <Search
                    searchInput={searchInput}
                    handleChange={handleInputChange}
                />                
            </div>
            <Row isHeader={true}/>
            {paginatedState.length > 0 ? (paginatedState.map(restaurant => {
                return <Row restaurant={restaurant} key={restaurant.id}/>
            })) : (
                <div>
                    <p>No results</p>
                </div>
            )}
            <div className='bottom-wrapper'>
                <PageNavigator
                    currentPage={currentPage}
                    pageNumbers={pageNumbers}
                    handleChange={handlePageChange}
                />
            </div>
        </Table>
    );
}