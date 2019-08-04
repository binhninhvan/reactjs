import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Contacts extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            name: "",
            email: "",
            
        }
    }
    

    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true,
            name: "",
            email: "",
            message: "",
            phone : ""
        })
    }

    isChange = (event) => {
        //console.log(event.target.value);
        const name = event.target.name // Lay toan bo ten component
        const value = event.target.value // Lay toan bo gia tri

        this.setState({
            [name]: value
        })
    }

    isFileChange = (event) => {
        const fAnh = event.target.files[0] // Lay toan bo ten component
        const name = fAnh.name;
        const path = fAnh.path;
        const size = fAnh.size;
        console.log(fAnh);
        console.log(name);
        console.log(path);
        console.log(size);
        this.setState({
            fAnh: name
        })
    }

    getGiaTri = () => {
        var noiDung = "";
        noiDung += "Ten la gi:" + this.state.fullName;
        noiDung += "/Ngay la gi:" + this.state.fNgay;
        return noiDung;
    }

    render() {
        if (this.state.isRedirect) {
            console.log(this.getGiaTri())
            return <Redirect to="/home" />;
        }
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-7 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5">Trang liên hệ</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                {/* begin tin tuc */}
                <section className="page-section" id="contact">
                    <div className="container">
                    {/* Contact Section Heading */}
                    <h3 className="page-section-heading text-center text-uppercase text-secondary mb-0">Điền thông tin vào đây để liên hệ với chúng tôi.</h3>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                        </div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* Contact Section Form */}
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                        <form name="sentMessage" id="contactForm" noValidate="novalidate">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input onChange = {(event)=>this.isChange(event)} name = "fullName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input onChange = {(event)=>this.isChange(event)}  name = "email" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <input  onChange = {(event)=>this.isChange(event)} name = "phone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea onChange = {(event)=>this.isChange(event)}  name = "message" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." aria-invalid="false" defaultValue={""} />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Chọn ngày</label>
                                    <div className="form-group">
                                      <select className="form-control" name="fNgay" onChange = {(event)=>this.isChange(event)}>
                                        <option value="thu3">Thứ 3</option>
                                        <option value="thu4">Thứ 4</option>
                                        <option value="thu5">Thứ 5</option>
                                        <option value="thu6">Thứ 6</option>
                                        <option value="thu7">Thứ 7</option>
                                      </select>
                                    </div>
                                </div>
                            </div>

                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Chọn File đính kèm</label>
                                    <div className="form-group">
                                        <input type="file" className="form-control-file" name="fAnh" onChange = {(event) => this.isFileChange(event)} aria-describedby="fileHelpId"/>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div id="success" />
                            <div className="form-group">
                                <button onClick={(event)=>this.submitForm(event)} type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </section>
                {/* end tin tuc */}
            </div>
        );
    }
}

export default Contacts;