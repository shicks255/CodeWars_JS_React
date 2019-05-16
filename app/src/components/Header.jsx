import React from "react";


export default function Header(props)
{
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href='https://stevenmhicks.com' target={"_blank"} className="navbar-brand"><b>Steven Hicks</b></a>
                </div>
            </div>
        </nav>
    );
}