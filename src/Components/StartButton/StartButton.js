import React from 'react'

const StartButton = ({ title }) => {
    return (
        <button onMouseOver={() => alert("yo yo yo")}>{title}</button>
    )
}

export default StartButton