import React from 'react'

const Table = ({ data }) => {
    const tableRows = data.map(data => {
        const { id, name, age, email } = data
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{email}</td>
            </tr>
        )
    })

    return (
        <table>
            {Object.keys(data[0]).map(header => <th>{header}</th>)}
            {tableRows}
        </table>
    )
}

export default Table