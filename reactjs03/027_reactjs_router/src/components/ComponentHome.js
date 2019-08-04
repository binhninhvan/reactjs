import React, { Component } from 'react';
import {Link } from "react-router-dom";

class ComponentHome extends Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100">
                        <div className="col-lg-7 my-auto">
                            <div className="header-content mx-auto">
                            <h1 className="mb-5">Trang chủ tin tức</h1>
                            <Link to="/home" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</Link>
                            </div>
                        </div>
                        <div className="col-lg-5 my-auto">
                            <div className="device-container">
                            <div className="device-mockup iphone6_plus portrait white">
                                <div className="device">
                                <div className="button">
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </header>
                <section className="download bg-primary text-center" id="download">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8 mx-auto">
                            <h2 className="section-heading">Discover what all the buzz is about!</h2>
                            <p>Our app is available on any mobile device! Download now to get started!</p>
                            <div className="badges">
                            <Link className="badge-link" to="/home"><img src="img/google-play-badge.svg" alt="So 1"/></Link>
                            <Link className="badge-link" to="/home"><img src="img/app-store-badge.svg" alt="So 2" /></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ComponentHome;