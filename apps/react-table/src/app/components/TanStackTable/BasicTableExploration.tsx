import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'
import Filter from '../Filter/Filter'
// import styled from 'styled-components'
import {
    createColumnHelper, 
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    SortingState,
    getFacetedRowModel,
    getFacetedUniqueValues,
    ColumnFiltersState,
} from '@tanstack/react-table'


import { Person, createPersonData } from '../../utils/types'
import { info } from 'console';

import { Table, Thead, Tbody, Tr, Th, Td, chakra, Button as UnstyledButton, ButtonGroup, Input, Select} from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
// import { useTable, useFilters, useSortBy } from 'react-table'

const StyledContainer = styled.div`
    width: 900px;
    height: 400px;
`
const Button = styled(UnstyledButton)`
    margin-right: 10px
`
const data: Person[] = createPersonData(100);

const columnHelper = createColumnHelper<Person>()
const columns = [
    columnHelper.accessor(row => row.firstName, {
        id: 'firstName',
        cell: info => info.getValue(),
        header: () => <span>First Name</span>
    }),
    columnHelper.accessor(row => row.lastName, {
        id: 'lastName',
        cell: info => info.getValue(),
        header: () => <span>Last Name</span>,
        enableColumnFilter: false
    }),
    columnHelper.accessor(row => row.age, {
        id: 'age',
        cell: info => info.getValue(),
        header: () => <span>Age</span>,
        enableGlobalFilter: false,
        enableColumnFilter: false
    }),
    columnHelper.accessor(row => row.visits, {
        id: 'visits',
        cell: info => info.getValue(),
        header: () => <span>Visits</span>,
        enableGlobalFilter: false,
        enableColumnFilter: false
    }),
    columnHelper.accessor(row => row.status, {
        id: 'status',
        cell: info => <Button type="button"
        onClick={(e: { preventDefault: () => void }) => {
          e.preventDefault();
          window.location.href='http://google.com';
          }} >{info.getValue()}</Button>,
        header: () => <span>Status</span>,
        enableColumnFilter: false
    }),
    columnHelper.accessor(row => row.progress, {
        id: 'progress',
        cell: info => info.getValue(),
        header: () => <span>Progress</span>,
        enableGlobalFilter: false,
        enableColumnFilter: false
    }),
]

const BasicTableExploration = () => {
    const [globalFilter, setGlobalFilter] = useState('')
    const [columnFilters, setColumnsFilters] = useState<ColumnFiltersState>([])
    const [sorting, setSorting] = useState<SortingState>([])
    const table = useReactTable({
        data, columns, getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting,
            columnFilters,
            globalFilter
        },
        // filterFns: {
        //     fuzzy: 'includesString'
        // },
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter, 
        globalFilterFn: 'includesString',
        getFilteredRowModel: getFilteredRowModel(),
        onColumnFiltersChange: setColumnsFilters,
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues()


    })

    return (
        <StyledContainer className="p-2">
        <Input 
            placeholder="Search here..."
            onChange={value => setGlobalFilter(value.target.value)}
            // onChange={value => setGlobalFilter(String(value))}
            value={globalFilter}

        />
        <Table>
            <Thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <Tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <Th key={header.id}>
                                {header.isPlaceholder ? null : 
                                // <div className=onClick={() => header.column.getToggleSortingHandler()}>
                                <div 
                                    // onClick={() => header.column.getToggleSortingHandler()}
                                    {...{
                                        // className: header.column.getCanSort()
                                        // ? 'cursor-pointer select-none'
                                        // : '',
                                        onClick: header.column.getToggleSortingHandler(),
                                    }}
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {header.column.getIsSorted() == 'asc' && <TriangleDownIcon aria-label='sorted descending' />}
                                    {header.column.getIsSorted() == 'desc' && <TriangleUpIcon aria-label='sorted ascending' />}
                                </div>}
                                {header.column.getCanFilter() && <Filter column={header.column} table={table}/>}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody>
                {table.getRowModel().rows.map(row => (
                    <Tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <Td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </Td>
                        ))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
        <div>
            <Button 
                colorScheme='blue' 
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                Prev
            </Button>
            {`Page ${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`}
            <Button 
                colorScheme='blue'
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
            >
                Next
            </Button>
            <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        </div>
        </StyledContainer>
    )
}

export default BasicTableExploration;