import React from 'react'

const Table = ({ tableData }) => {
    const tableHeadings = Object.keys(tableData[0])
    const tableValues = Object.values(tableData[0])

    return (
        <table>
            <tr>
                {tableHeadings.map(heading => (<th>{heading}</th>))}
            </tr>
            <tr>
                {tableValues.map(value => (<th>{value}</th>))}
            </tr>
        </table>
    )
}

export default Table