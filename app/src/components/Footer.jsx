import React from "react";

export default class Footer extends React.Component
{


    constructor(props)
    {
        super(props);
        const date = new Date();
        const dateString = date.toLocaleDateString();


        this.state = {
            date: dateString
        }
    }


    render()
    {
        return(

            <footer>
                <div className="navbar-fixed-bottom bg-info">
                    <h1>Steven M Hicks {this.state.date}</h1>
                </div>
            </footer>

        );

    }


}

