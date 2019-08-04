import React, { Component } from 'react';
import TableRow from './TableRow';

class TableData extends Component {
    mappingDataUser = () => this.props.dataUser.map((value, key) => (
        <TableRow key = {key} 
        fullName = {value.name} 
        id = {value.id} 
        stt = {key + 1}
        Permission = {value.Permission}
         tel = {value.tel} 
         editFunClick = {(user)=> this.props.editFun(value)}  
         changeEditUSerStatus = {()=> this.props.changeEditUSerStatus()}
         deleteButtonClick = {(idUser) => this.props.deleteButtonClick(idUser)}/>
    ))
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Số điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.mappingDataUser()
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;