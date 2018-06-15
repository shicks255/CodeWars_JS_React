import React from 'react';
import KataStub from './KataStub';

export default class KataBrowser extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const stubs = this.props.katas.map((value, index) =>
        {
            return (
                <KataStub selected={this.props.selected} onclick={(kataId) => this.props.onclick(kataId)} key={value.id} kata={value} />
            );

        });


        const header = this.props.difficulty == 10 ? "Showing all Katas" : "Showing Katas with difficulty " + this.props.difficulty;

        return(
            <div className="kataBrowser">
                <div className="kataBrowserTitle"><b>{header}</b></div>
                {stubs}
            </div>
        );
    }


}