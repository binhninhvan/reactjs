import React, { Component } from 'react';
import New_Item from './New_Item';
import dl from './dulieu.json';

class News extends Component {
    render() {
        return (
        <div>
            <header className="masthead tintuc">
                <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-7 my-auto">
                    <div className="header-content mx-auto">
                        <h1 className="mb-5">Trang danh sách tin</h1>
                        <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                    </div>
                    </div>
                    <div className="col-lg-5 my-auto">
                    <div className="device-container">
                        <div className="device-mockup iphone6_plus portrait white">
                        <div className="device">
                            <div className="screen">
                            {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                            {/* <img src="img/demo-screen-1.jpg" class="img-fluid" alt=""> */}
                            </div>
                            <div className="button">
                            {/* You can hook the "home button" to some JavaScript events or just remove it */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>
            {/* begin tin tuc */}
            <div className="container">
                <div className="row">
                    {
                        dl.map((value, index) => {
                            return (
                                <New_Item key = {index} anh={value.anh} tieuDe = {value.tieuDe}
                                noiDung = {value.noiDung} tinId={value.id}/>
                            )
                        })
                    }
                </div>
            </div>
            {/* end tin tuc */}
        </div>
        );
    }
}

export default News;