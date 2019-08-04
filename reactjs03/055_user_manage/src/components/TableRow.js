import React, { Component } from 'react';

class TableRow extends Component {

    constructor(props) {
        super(props);
    }
    
    permissionShow = () => {
        if (this.props.Permission === 1) {
            return "Admin";
        } else if (this.props.Permission === 2) {
            return "Moderator";
        } else {
            return "Normal user";
        }
    }

    deleteButtonClick = () => {
        this.props.deleteButtonClick(this.props.id);       
    }

    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUSerStatus();
    }
    render() {

        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.fullName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick = {() => this.editClick()}>
                            <i className="fa fa-edit">Sửa</i>
                        </div>
                        <div className="btn btn-danger xoa" onClick = {()=> this.deleteButtonClick()}>
                            <i className="fa fa-delete">Xóa</i>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRow;