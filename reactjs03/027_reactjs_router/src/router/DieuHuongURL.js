import React, { Component } from 'react';
import {Route } from "react-router-dom";
import ComponentHome from '../components/ComponentHome';
import News from '../components/News';
import NewDetails from '../components/NewDetails';
import Contacts from '../components/Contacts';

class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/home" component={ComponentHome} />
                <Route path="/tin" component={News} />
                <Route path="/tin-tuc/:slug.:id.html" component={NewDetails} />
                <Route path="/contact" component={Contacts} />
            </div>
        );
    }
}

export default DieuHuongURL;