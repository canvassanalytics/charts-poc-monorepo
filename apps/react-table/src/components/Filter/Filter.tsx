import React from 'react';
import {
    Column,
    Table as TTable,
} from '@tanstack/react-table'

import { Select} from '@chakra-ui/react'

const Filter = ({column, table} : { column: Column<any, unknown>, table: TTable<any>}) => {
    const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)
    const columnFilterValue = column.getFilterValue()
    console.log('columnFilterValue', columnFilterValue)
    const sortedUniqueValues = React.useMemo(
        () =>
          typeof firstValue === 'number'
            ? []
            : Array.from(column.getFacetedUniqueValues().keys()).sort(),
        [column.getFacetedUniqueValues()]
      )
      console.log('firstValue', firstValue)
      console.log(sortedUniqueValues)

      return (
        <Select value={(columnFilterValue ?? '') as string} placeholder="Select First Name" onChange={(value: any) => column.setFilterValue(value.target.value)}>
            {sortedUniqueValues.slice(0, 5000).map(value => <option value={value} key={value}>{value}</option> )}
        </Select>
      )
}

export default Filter; 