import React, { Component } from 'react';
import dl from './dulieu.json';
import NewsRelated from './NewsRelated.js';
import {Link } from "react-router-dom";

class NewDetails extends Component {
    render() {
        // var x = 2;
        // var y = "2";
        // y = parseInt(y, 20);
        // so sanh == la so sanh gia tri khong quan tam kieu du lieu
        // so sanh === la so sanh gia tri va kieu du lieu
        // console.log(this.props.match.params.id)
        // console.log(typeof(this.props.match.params.id))

        return (
            <div>
                <header className="masthead">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-7 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5">Trang chi tiet tin tuc</h1>
                            <Link to="/home" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</Link>
                        </div>
                        </div>
                        <div className="col-lg-5 my-auto">
                        <div className="device-container">
                            <div className="device-mockup iphone6_plus portrait white">
                            <div className="device">
                                <div className="screen">
                                </div>
                                <div className="button">
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row mt-3">
                    <div className="col-12">
                        {
                             dl.map((value, key) => {
                                if (value.id === parseInt(this.props.match.params.id, 20)) {
                                    // console.log(value.tieuDe)
                                    return (
                                            <div className="jumbotron jumbotron-fluid" key = {key}>
                                                <div className="container">
                                                    <h2 className="text-center">{value.tieuDe}</h2>
                                                    <img src={value.anh} className="img-fluid rong100" alt={value.tieuDe} />
                                                    <hr className="my-2" />
                                                    <p>{value.noiDung}</p>
                                                </div>
                                            </div>
                                    )
                                }
                            })
                        }
                        <div className="container">
                            <div className="card border-primary">
                                <h4 className="card-title text-center">Tin Liên Quan</h4>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card-deck">
                                    {
                                        dl.map((value, key) => {
                                            if (value.id !== parseInt(this.props.match.params.id, 20)) {
                                                return (
                                                    <NewsRelated key = {key} anh={value.anh} tieuDe = {value.tieuDe}
                                                    noiDung = {value.noiDung} tinId={value.id}/>
                                                )
                                            }
                                        })
                                    } 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewDetails;