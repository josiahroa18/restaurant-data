import React from 'react';
import generateFilteredState from '../utils/generateFilteredState';

import { Table } from './styledComponents';
import Row from './Row';

export default props => {
    const {
        restaurantData,
        stateOptions,
        genreOptions
    } = props;

    const filteredState = generateFilteredState(restaurantData, stateOptions, genreOptions);

    return (
        <Table>
            <Row isHeader={true}/>
            {filteredState.map(restaurant => {
                return <Row restaurant={restaurant} key={restaurant.id}/>
            })}
        </Table>
    );
}