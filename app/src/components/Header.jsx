import React from "react";


export default class Header extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href='' className="navbar-brand">Steven Hicks</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="#">Steven M. Hicks</a></li>
                        <li><a href="#">JavaScript Practice</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}