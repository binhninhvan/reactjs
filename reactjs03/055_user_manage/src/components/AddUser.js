import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     trangThaiChinhSua:false
        // }
        this.state = {
            id:"",
            name: "",
            tel: "",
            Permission: ""
        }
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:[value][0]
        })

        // Package to item to send to App
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.Permission = this.state.Permission;
    }

    // thayDoiTrangThai = () => {
    //     this.setState ({
    //         trangThaiChinhSua: !this.state.trangThaiChinhSua
    //     });
    // }
    
    kiemTRaTRangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="card boder-primary mb-3 mt-2">
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Thêm mới User</h1>
                        </div>
                        <form className="user">
                            <div className="form-group">
                                <input type="text" className="form-control form-control-user" onChange = {(event) => this.isChange(event)} name="name" placeholder="Họ tên user" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-user" onChange = {(event) => this.isChange(event)}  name="tel" placeholder="Số điện thoại" />
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="Permission" onChange = {(event) => this.isChange(event)} >
                                    <option>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type = "reset" className="btn btn-block btn-primary" onClick = {(name, tel, Permission)=>this.props.add(this.state.name, this.state.tel, this.state.Permission)} value = "Thêm mới"/>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }

    // hienThiForm = () => {
    //     if (this.state.trangThaiChinhSua === true) {
    //         return (
    //             <div className="card boder-primary mb-3 mt-2">
    //                 <div className="p-5">
    //                     <div className="text-center">
    //                         <h1 className="h4 text-gray-900 mb-4">Thêm mới User</h1>
    //                     </div>
    //                     <form className="user">
    //                         <div className="form-group">
    //                             <input type="text" className="form-control form-control-user" name="name" placeholder="Họ tên user" />
    //                         </div>
    //                         <div className="form-group">
    //                             <input type="text" className="form-control form-control-user" name="tel" placeholder="Số điện thoại" />
    //                         </div>
    //                         <div className="form-group">
    //                             <select className="form-control" name="Permission">
    //                                 <option>Chọn quyền mặc định</option>
    //                                 <option value={1}>Admin</option>
    //                                 <option value={2}>Modrator</option>
    //                                 <option value={3}>Normal</option>
    //                             </select>
    //                         </div>
    //                         <hr />
    //                     </form>
    //                     <hr />
    //                 </div>
    //             </div>
    //         )
    //     } else {
    //         return;
    //     }
    // }

    // hienThiNut = () => {
    //     if (this.state.trangThaiChinhSua === true) {
    //         return (
    //             <div className="btn btn-block btn-outline-secondary" onClick = {() => this.thayDoiTrangThai()}>
    //                 Đóng lại
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div className="btn btn-block btn-outline-info" onClick = {() => this.thayDoiTrangThai()}> 
    //                 Thêm mới
    //             </div>
    //             )   
    //     }
    // }

    render() {
        // console.log(this.state);
        return (
            <div>
                {
                    // this.hienThiNut()
                }
                {/* {
                    this.hienThiForm()
                } */
                }
                {
                    this.kiemTRaTRangThai()
                }
            </div>
        );
    }
}

export default AddUser;