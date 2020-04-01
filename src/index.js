import React from 'react';
import ReactDOM from 'react-dom';
import Switch from 'react-switch';
// import Style from'./Components/Style.css';
import './Style.css'


class App extends React.Component {
    constructor () {
        super ()
        this.state = {
            checked: false

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(checked) {
        this.setState({checked})
    }
    render () {
        return (
            <div class="wrpper">
                <h2>IOS Switch</h2>
                    <Switch
                        className="react-switch"
                        onChange={this.handleChange}
                        checked={this.state.checked}  
                    />
                    <p>the switch is <b>{this.state.checked ? 'on' : 'off' }</b></p>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))









