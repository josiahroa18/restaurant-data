import React from 'react';
import { SideBar, OptionsContainer, Option } from './styledComponents';

export default props => {
    const {
        stateOptions,
        genreOptions,
        handleSelect
    } = props;

    return (
        <SideBar>
            <h2>Filter by state</h2>
            {stateOptions && (
                <OptionsContainer>
                    {Object.keys(stateOptions).map(state => {
                        return (
                            <Option 
                                key={state} 
                                selected={stateOptions[state]}
                                onClick={() => handleSelect('states', state)}
                            >
                                {state}
                            </Option>
                        )
                    })}
                </OptionsContainer>
            )}
            <h2>Filter by genre</h2>
            {genreOptions && (
                <OptionsContainer>
                    {Object.keys(genreOptions).sort().map(genre => {
                        return (
                            <Option 
                                key={genre} 
                                selected={genreOptions[genre]}
                                onClick={() => handleSelect('genres', genre)}
                            >
                                {genre}
                            </Option>
                        )
                    })}
                </OptionsContainer>
            )}
        </SideBar>
    );
}