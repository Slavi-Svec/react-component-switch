import React from 'react'
import ReactDOM from 'react-dom';
import CheckBox from './Components/CheckBox/CheckBox'
import CheckBoxV2 from './Components/CheckBoxV2/CheckBoxV2'


const App = () => {
    return (
        <>
            <CheckBox />
            {/* <CheckBoxV2 />  */}
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
