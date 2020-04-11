import React from 'react'

const Text = ({ variant, children }) => {
    const Tag = variant
    return (
        <Tag>{children}</Tag>
    )
}

export default Text