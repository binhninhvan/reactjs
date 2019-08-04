import React, { Component } from 'react';
import {Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <p>© Your Website 2019. All Rights Reserved.</p>
                        <ul className="list-inline">
                        <li className="list-inline-item">
                            <Link to="/home">Privacy</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/home">Terms</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/home">FAQ</Link>
                        </li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;