import React from 'react';
import { Input } from '@chakra-ui/react';

const DefaultColumnFilter = ({ column: filteredValue, preFilteredRows, setFilter}) => {
    const count = preFilteredRows.length; 

    return (
        <Input 
            value={filteredValue}
            onChange={e => {
                setFilter(e.target.value)
            }}
            placeholder={`Search ${count} records...`}
        />
    )
};

export default DefaultColumnFilter; 