import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div>
            <p>Stopka</p>
            <Route path="/" exact render={(props) => (
                <p className="src">strona główna</p>
            )
            } />

            <Route path="/:page" exact render={(props) => (
                <>
                    {/* <p className="src">{props.match.params.page}</p> */}
                    <p className="src">{props.match.url}</p>
                    {/* <p className="src">{props.match.path}</p> */}
                </>
            )
            } />

            <Route path="/:page/:idProduct" exact render={(props) => (
                <>
                    {/* <p className="src">{props.match.params.idProduct}</p> */}
                    <p className="src">{props.match.url}</p>
                    {/* <p className="src">{props.match.path}</p> */}
                </>
            )
            } />

        </div>
    )
}

export default Footer;