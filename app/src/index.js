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
        const selectedKata = this.state.katas.find((value, index) =>
        {
            if (value.id === this.state.selectedKata)
                return value;
        });

        const kataDetail = selectedKata ?
            <Kata selectedKata={selectedKata}/> :
                '';

        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 border">
                            <KataBrowser selected={this.state.selectedKata} onclick={(kataId) => this.clickKata(kataId)} katas={this.state.katas}/>
                        </div>
                        <div className="col-md-8 border">
                            {kataDetail}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    clickKata(kataId)
    {
        this.setState({selectedKata: kataId});
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

