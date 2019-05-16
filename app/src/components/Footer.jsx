import React from "react";

export default function Footer(props)
{
    const date = new Date();
    const dateString = date.toLocaleDateString();
    return(
        <footer className="footer">
            <div className="container">
                <div className="bg-info footer">
                    <blockquote className="row justify-content-center">
                        &copy;&nbsp;
                        <p>Steven M Hicks {dateString}</p>
                    </blockquote>
                </div>
            </div>
        </footer>

    );
}

