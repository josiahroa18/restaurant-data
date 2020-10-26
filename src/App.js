import React, { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';

import getStateOptions from './utils/getStateOptions';
import getGenreOptions from './utils/getGenreOptions';

import { AppWrapper, Spinner } from './components/styledComponents';
import SideBar from './components/SideBar';
import Table from './components/Table';

function App() {
  const {
    restaurantData,
    loading,
    fetchError
  } = useFetch();

  // State that keeps track of available options and if they are selected or not
  const [stateOptions, setStateOptions] = useState({});
  const [genreOptions, setGenreOptions] = useState({});

  const stateResponse = getStateOptions();
  const genreResponse = getGenreOptions(restaurantData);

  // Updates selected state based on type passed through
  const handleSelect = (type, name) => {
    switch(type){
      case 'states':
        setStateOptions({
          ...stateOptions,
          [name]: !stateOptions[name]
        })
        break;
      case 'genres':
        setGenreOptions({
          ...genreOptions,
          [name]: !genreOptions[name]
        })
        break;
      default:
        break;
    }
  }

  // Take the response from getStateOptions and store it in state
  useEffect(() => {
    if(Object.keys(stateOptions).length < 1){
      setStateOptions(stateResponse);
    }
  }, [stateResponse])

  // Take the response from getGenreOptions and store it in state
  const restaurantDataReady = restaurantData.length > 0
  useEffect(() => {
    if(Object.keys(genreOptions).length < 1 && restaurantDataReady){
      setGenreOptions(genreResponse);
    }
  }, [restaurantDataReady, genreResponse])

  const sideBarProps = {
    stateOptions,
    genreOptions,
    handleSelect
  }

  const tableProps = {
    restaurantData,
    stateOptions,
    genreOptions
  }

  return (
    <AppWrapper>
      <SideBar {...sideBarProps}/>
      {loading ? (
        <Spinner/>
      ) : (
        restaurantData.length > 0 ? (
            <Table {...tableProps}/>
        ) : (
          <p>{fetchError}</p>
        )
      )}

    </AppWrapper>
  );
}

export default App;
