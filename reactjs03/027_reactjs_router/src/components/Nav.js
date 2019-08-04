import React, { Component } from 'react';
import {NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Reactjs Router - News</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link js-scroll-trigger">Trang chủ</NavLink>
                            {/* Co the dung activeClassName de hien thi mau cua active link */}
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link js-scroll-trigger" href="/tintuc">Tin tức</a> */}
                            <NavLink to="/tin" className="nav-link js-scroll-trigger">Tin tức</NavLink>
                        </li>
                        {/* <li className="nav-item"> */}
                            {/* <a className="nav-link js-scroll-trigger" href="/chitiet">Tin tức chi tiết</a> */}
                            {/* <NavLink to="/tin-tuc" className="nav-link js-scroll-trigger">Tin tức chi tiết</NavLink>
                        </li> */}
                        <li className="nav-item">
                            {/* <a className="nav-link js-scroll-trigger" href="/contact">Liên hệ</a> */}
                            <NavLink to="/contact" className="nav-link js-scroll-trigger">Liên hệ</NavLink>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;