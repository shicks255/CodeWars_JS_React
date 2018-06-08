import React from "react";
import ReactDOM from "react-dom";


export default class Header extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {

        return(
            <nav className="nav nav-justified">
                <a className="nav-item nav-link active" href="#">Steven M. Hicks</a>
                <a className="nav-item nav-link" href="#">JavaScript Practice</a>
                <a className="nav-item nav-link" href="#">Link</a>
                <a className="nav-item nav-link disabled" href="#">Disabled</a>
            </nav>
        );
    }
}