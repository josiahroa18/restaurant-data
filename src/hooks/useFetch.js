import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState('');

    const [sorted, setSorted] = useState(false);

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
                    id: restaurant.id,
                    name: restaurant.name,
                    city: restaurant.city,
                    state: restaurant.state,
                    telephone: restaurant.telephone,
                    genres: restaurant.genre.split(','),
                    website: restaurant.website
                }
            }));
            setLoading(false);
        })
        .catch(err => {
            setFetchError(err.response.data.message);
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        if(restaurantData.length > 0 && !sorted){
            setRestaurantData(prevData => prevData.sort((a, b) => (a.name > b.name) ? 1 : -1));
            setSorted(true);
        }
    }, [restaurantData]);
    

    return {
        restaurantData,
        loading,
        fetchError
    }
}

export default useFetch;