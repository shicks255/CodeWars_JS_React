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
                <div className="phantomFooter"/>
                <div className="bg-info footer">
                    <p>Steven M Hicks {this.state.date}</p>
                </div>
            </footer>

        );

    }


}

