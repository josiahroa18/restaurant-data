import React from 'react';
import { Table } from './styledComponents';
import Row from './Row';

export default ({ restaurantData }) => {
    return (
        <Table>
            <Row isHeader={true}/>
            {restaurantData.map(restaurant => {
                return <Row restaurant={restaurant} key={restaurant.id}/>
            })}
        </Table>
    );
}