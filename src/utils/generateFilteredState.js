export default (restaurantData, stateOptions, genreOptions) => {
    // Check to see if there are any filters selected
    let hasSelectedFilter = false;

    const STATE_OPTIONS_VALUE_ARRAY = Object.values(stateOptions);
    const GENRE_OPTIONS_VALUE_ARRAY = Object.values(genreOptions);

    STATE_OPTIONS_VALUE_ARRAY.some(stateOption => {
        if(stateOption){
            hasSelectedFilter = true;
            return true;
        }
        return false;
    })

    // Only continue checking if no state filters were selected
    if(!hasSelectedFilter){
        GENRE_OPTIONS_VALUE_ARRAY.some(genreOption => {
            if(genreOption){
                hasSelectedFilter = true;
                return true;
            }
            return false;
        })
    }

    // Return filtered state or all restaurant data if no filters are selected
    if(hasSelectedFilter){
        const filteredState = [];

        // Find which restaurants match selected states
        restaurantData.forEach(restaurant => {
            if(stateOptions[restaurant.state]){
                filteredState.push(restaurant);
            }
        })

        // Find which restaurants match selected genres
        restaurantData.forEach(restaurant => {
            restaurant.genres.some(genre => {
                if(genreOptions[genre]){
                    filteredState.push(restaurant);
                    return true;
                }
                return false;
            })
        })

        return filteredState;
    } 

    // Default - return all restaurants
    return restaurantData;
}

