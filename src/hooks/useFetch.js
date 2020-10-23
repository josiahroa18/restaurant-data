import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState('');

    const API_ENDPOINT = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
    const API_KEY = `Api-Key ${process.env.REACT_APP_API_KEY}`;
    const HEADERS = {
        Authorization: API_KEY
    }

    useEffect(() => {
        setLoading(true);
        axios.get(API_ENDPOINT, { headers: HEADERS })
        .then(res => {
            setRestaurantData(res.data.map(restaurant => {
                return {
                    name: restaurant.name,
                    city: restaurant.city,
                    state: restaurant.state,
                    telephone: restaurant.telephone,
                    genre: restaurant.genre.split(',')
                }
            }));
            setLoading(false);
        })
        .catch(err => {
            setFetchError(err.response.data.message);
            setLoading(false);
        })
    }, []);
    

    return {
        restaurantData,
        loading,
        fetchError
    }
}

export default useFetch;