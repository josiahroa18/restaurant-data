import React from 'react';
import { Row, Col, TagContainer, Tag } from './styledComponents';

export default ({ isHeader, restaurant }) => {
    return (
        <Row isHeader={isHeader}>
            <Col width='20%'>{restaurant ? (
                <a href={restaurant.website} target='_blank' rel="noopener noreferrer">
                    {restaurant.name}
                </a> ) : 'Name'}
            </Col>
            <Col width='15%'>{restaurant ? restaurant.city : 'City'}</Col>
            <Col width='10%'>{restaurant ? restaurant.state : 'State'}</Col>
            <Col width='20%'>{restaurant ? restaurant.telephone : 'Contact'}</Col>
            <Col width='35%'>
                {restaurant ? (
                    <TagContainer>
                        {restaurant.genres.map(genre => {
                            return <Tag key={genre}>{genre}</Tag>
                        })}
                    </TagContainer>                    
                ) : 'Genres'}
            </Col>
        </Row>
    )
}