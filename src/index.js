import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor () {
        super ()
        this.state = {

        }
    }
    render () {
        return (
            <div>
            hello 
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))






// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



