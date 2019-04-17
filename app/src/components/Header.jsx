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
                        <a href='http://new.stevenmhicks.com' target={"_blank"} className="navbar-brand">Steven Hicks</a>
                    </div>
                </div>
            </nav>
        );
    }
}