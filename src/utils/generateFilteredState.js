export default (restaurantData, stateOptions, genreOptions, searchInput) => {
    // Check to see if there are any filters selected
    let hasSelectedFilter = false;

    const STATE_OPTIONS_VALUE_ARRAY = Object.values(stateOptions);
    const GENRE_OPTIONS_VALUE_ARRAY = Object.values(genreOptions);

    const SEARCH_INPUT = searchInput.trim().toLowerCase();

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

    const filteredState = [];
    // Return filtered state or all restaurant data if no filters are selected
    if(hasSelectedFilter){
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

        restaurantData = filteredState;
    } 
    
    // Find which filtered restaurants match the search field
    if(SEARCH_INPUT){
        const searchFilteredState = [];

        restaurantData.forEach(restaurant => {
            let hasMatch = false;
            const RESTAURANT_NAME = restaurant.name.trim().toLowerCase();
            const RESTAURANT_CITY = restaurant.city.trim().toLowerCase();
            const RESTAURANT_GENRES = restaurant.genres.map(genre => genre.trim().toLowerCase());

            if(RESTAURANT_NAME.includes(SEARCH_INPUT)){
                hasMatch = true;
            }

            if(RESTAURANT_CITY.includes(SEARCH_INPUT)){
                hasMatch = true;
            }

            RESTAURANT_GENRES.some(genre => {
                if(genre.includes(SEARCH_INPUT)){
                    hasMatch = true;
                    return true;
                }
                return false;
            })
            
            if(hasMatch){
                searchFilteredState.push(restaurant);
            }
        })
        
        restaurantData = searchFilteredState;
    }

    return restaurantData;
}

