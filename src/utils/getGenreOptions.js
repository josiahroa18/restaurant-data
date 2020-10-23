export default restaurantData => {
    if(restaurantData){
        const foundGenres = {};

        restaurantData.forEach(restaurant => {
            const restaurantGenreCount = restaurant.genres.length;

            for(let i=0; i<restaurantGenreCount; i++){
                const genreName = restaurant.genres[i];

                if(!(genreName in foundGenres)){
                    foundGenres[genreName] = false;
                }
            }
        })

        return foundGenres;
    }   

    return {};
}