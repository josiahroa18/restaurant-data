import React from 'react';
import useFetch from './hooks/useFetch';

import { AppWrapper, Spinner } from './components/styledComponents';
import Table from './components/Table';

function App() {
  const {
    restaurantData,
    loading,
    fetchError
  } = useFetch();

  return (
    <AppWrapper>
      {loading ? (
        <Spinner/>
      ) : (
        restaurantData.length > 0 ? (
          <Table restaurantData={restaurantData}/>
        ) : (
          <p>{fetchError}</p>
        )
      )}

    </AppWrapper>
  );
}

export default App;
