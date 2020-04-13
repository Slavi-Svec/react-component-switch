import React from 'react'

const SurveyButton = ({ heading }) => {
    return (
        <button onClick={() => window.open("www.google.com") }>{ heading }</button>
    )

}

export default SurveyButton