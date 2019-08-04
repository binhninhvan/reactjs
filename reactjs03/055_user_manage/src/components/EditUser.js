import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            Permission: this.props.userEditObject.Permission
        }
    }
    

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:[value][0]
        })
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        
        this.props.changeEditUSerStatus();
        this.props.getUserEditInfoFromEditForm(info);
        
    }

    render() {
        return (
            <div className="card text-white bg-warning mb-3 mt-2">
                {/* <div className="p-5"> */}
                    <div className="text-center">
                        <h1 className="h4 text-warning-900 mb-4">Sửa thông tin User ID : {this.props.userEditObject.id}</h1>
                    </div>
                    <form className="user">
                        <div className="form-group">
                            <input type="text" className="form-control form-control-user" onChange = {(event) => this.isChange(event)}  name="name" placeholder="Họ tên user" defaultValue={this.props.userEditObject.name}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-user" onChange = {(event) => this.isChange(event)} name="tel" placeholder="Số điện thoại"  defaultValue={this.props.userEditObject.tel}/>
                        </div>
                        <div className="form-group">
                            <select className="form-control" name="Permission" onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditObject.Permission} required>
                                <option>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type = "button" className="btn btn-danger btn-primary" value = "Cập nhật" onClick = {()=>this.saveButton()}/>
                        </div>
                    </form>
                {/* </div> */}
            </div>
        );
    }
}

export default EditUser;