# restaurant-data
My solution for the Charter/Spectrum Front-End Code Challenge

## Local Development Setup
1. Clone this repo
2. run `npm install` in the root directory
3. run `npm start`
4. The local development server should now be running on `localhost:3000`

## User Stories
- A user should be able to see a table with the name, city, state, phone number, and genres for each restaurant.
- A user should see results sorted by name in alphabetical order starting with the beginning of the alphabet
- A user should be able to filter restaurants by state. If a state is selected that does not contain any restaurants, there should be something that indicates no restaurants were found for that state.
- A user should be able to filter by genre.
- State and Genre filters should default to “All” and take effect instantaneously (no additional clicks).
- A user should be able to enter text into a search field. When hitting the enter key or clicking on a
search button, the table should search results. Search results should match either the name, city, or
genre.
- A user should be able to clear the search by clearing the text value in the search input.
- A user should only see 10 results at a time and the table should be paginated.
- A user should be able to combine filters and search. The user should be able to turn filters on and off
while a search value is present.

## External APIs
[Restaurant Data](https://code-challenge.spectrumtoolbox.com/api/restaurants) - Requires an API key