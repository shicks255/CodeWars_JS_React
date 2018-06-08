import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'react-bootstrap/dist/react-bootstrap.min';
import Header from './components/Header';
import KataBrowser from "./components/KataBrowser";
import Footer from './components/Footer';
import Kata from "./components/Kata";

import {getKatas} from "./utilities/getKatas";

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            katas: getKatas(),
        }
    }

    render()
    {
        return (
            <div>
                <Header />
                <KataBrowser/>
                <Kata/>
                <Footer />
            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)

