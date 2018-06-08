import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'react-bootstrap/dist/react-bootstrap.min';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (<Header />)
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)

