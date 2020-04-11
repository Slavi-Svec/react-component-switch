import React from 'react'

 const Image = ({ image, alt }) => {
    return (
        <img alt={alt} src={image} />
    )
}

export default Image