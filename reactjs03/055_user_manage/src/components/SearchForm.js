import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataTemp: "",
            userObj: {}
        }
    }

    isChange = (event) => {
        this.setState({
            dataTemp: event.target.value
        });
        this.props.getTextSearchProps(this.state.dataTemp);
    }

    getUserEditInfoFromEditForm = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoFromEditApp(info);
    }

    isShowEditUSer = () => {      
        if (this.props.editUserStatus) {
            return <EditUser
            getUserEditInfoFromEditForm = {(info)=> this.getUserEditInfoFromEditForm(info)}
             changeEditUSerStatus = {()=> this.props.changeEditUSerStatus()}
             userEditObject = {this.props.userEditObject}/>
        } 
    }

    hienThiNut = () => {
        if (this.props.hienThiForm) {
            return (
                <div className="btn btn-block btn-outline-secondary" onClick = {() => this.props.ketNoi()}>
                    Đóng lại
                </div>
            )
        } else {
            return (
                <div className="btn btn-block btn-outline-info" onClick = {() => this.props.ketNoi()}> 
                    Thêm mới
                </div>
            )
        }
    }

    render() {
        return (
            <div className="col-12">
                <div className="row">
                    {
                        this.isShowEditUSer()
                    }
                </div>
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" aria-describedby="helpId" onChange = {(event)=> this.isChange(event)} placeholder="Nhập tên cần tìm"/>
                        <div className="btn btn-info" onClick = {(dl) => this.props.getTextSearchProps(this.state.dataTemp)}>
                        Tìm
                        </div>
                    </div>
                    <div className="btn-group1">
                        {
                            this.hienThiNut()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;