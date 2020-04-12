import React from 'react'
import './Styles.css'


const CodeSnippet = ({ codeSnippet }) => {
    return (
        <code class="codeSnippet"><xmp>{ codeSnippet }</xmp></code>
    )
}


export default CodeSnippet