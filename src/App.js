import React from 'react';
import useFetch from './hooks/useFetch';

function App() {
  const {
    restaurantData,
    loading,
    fetchError
  } = useFetch();

  console.log(restaurantData);

  return (
    <div className="App">

    </div>
  );
}

export default App;
