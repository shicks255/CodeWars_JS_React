import React from 'react';
import ReactDOM from 'react-dom';
import Mobi from '@mobiscroll/react-lite';
import './index.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'react-bootstrap/dist/react-bootstrap.min';
import Header from './components/Header';
import KataBrowser from "./components/KataBrowser";
import Footer from './components/Footer';
import Kata from "./components/Kata";
import Scrollbar from "./components/ScrollBar";

import {getKatas} from "./utilities/getKatas";

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            katas: getKatas(),
            solutionsShow: Array(getKatas().length).fill(false),
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
            <Kata solutionsShown={this.state.solutionsShow} selectedKata={selectedKata} toggleSolution={(id) => this.toggleShowSolution(id)}/> :
                'Select a problem to see its details.';

        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row justify-content-center">
                        <h3>CodeWars.com JavaScript Problems:</h3>
                        <Scrollbar/>
                    </div>
                    <div className="row">
                        <div className="col-md-4 border">
                            <KataBrowser selected={this.state.selectedKata} onclick={(kataId) => this.clickKata(kataId)} katas={this.state.katas}/>
                        </div>
                        <div className="col-md-8 border kata">
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

    toggleShowSolution(id)
    {
        const showSolutions = this.state.solutionsShow;
        const newArray = this.state.solutionsShow.slice();
        newArray[id] = !newArray[id];

        this.setState({
            solutionsShow:newArray
        });
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

