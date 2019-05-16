import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'react-bootstrap/dist/react-bootstrap.min';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';
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
            solutionsShow: Array(getKatas().length).fill(false),
            difficulty: 10,
            katas: getKatas(10),
        }
    }

    getKatas(dif)
    {
        this.setState({katas: getKatas(dif)});
    }

    render()
    {
        const selectedKata = this.state.katas.find((value, index) =>
        {
            if (value.id === this.state.selectedKata)
                return value;
            return false;
        });

        const kataDetail = selectedKata
            ? <Kata solutionsShown={this.state.solutionsShow} selectedKata={selectedKata} toggleSolution={(id) => this.toggleShowSolution(id)}/>
            : 'Select a problem to see its details.';

        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row justify-content-center">
                        <h3>CodeWars.com JavaScript Problems</h3>
                    </div>
                    <br/><br/>
                    <Scrollbar difficulty={this.state.difficulty} setDifficulty={(dif) => this.setDifficulty(dif)}/>
                    <div className="row">
                        <div className="col-md-4 border">
                            <KataBrowser difficulty={this.state.difficulty} selected={this.state.selectedKata} onclick={(kataId) => this.clickKata(kataId)} katas={this.state.katas}/>
                        </div>
                        <div className="col-md-8 border kata">
                            {kataDetail}
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
                <Footer />
            </div>
        )
    }

    setDifficulty(dif)
    {
        this.setState({
            difficulty: dif,
        });
        this.getKatas(this.state.difficulty);
    }

    clickKata(kataId)
    {
        this.setState({selectedKata: kataId});
    }

    toggleShowSolution(id)
    {
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

