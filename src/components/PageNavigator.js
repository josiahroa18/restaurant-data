import React from 'react';
import { PageNavigator, PageChanger } from './styledComponents';

export default ({currentPage, pageNumbers, handleChange}) => {
    return (
        <PageNavigator>
            {pageNumbers.map(page => {
                return (
                    <PageChanger
                        key={page}
                        onClick={() => handleChange(page)}
                        currentPage={currentPage === page ? 1 : 0}
                    >
                        {page}
                    </PageChanger>
                )
            })}
        </PageNavigator>
    )
}