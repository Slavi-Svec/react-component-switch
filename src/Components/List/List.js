import React from 'react'

const List = ({ items, Tag }) => {
    const lists = items.map(item => {
        return (
            <li>{item}</li>
        )
    })

    return (
        <Tag>{lists}</Tag>
    )
}

// const List = ({ items, Tag }) => (<ul>{items.map(item => (<li>{item}</li>))}</ul>)

export default List