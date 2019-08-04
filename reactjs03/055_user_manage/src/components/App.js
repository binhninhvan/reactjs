import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      searchText: "",
      editUserStatus: false,
      userEditObject: {}
    }
  }
  
  
  componentWillMount() {
    // Kiem tra xem co localstorage chua
    if (localStorage.getItem('userData') === null) {   
      localStorage.setItem("userData", JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
  }
  

  editUser = (user) => {
    this.setState({
      userEditObject: user
    })
    // console.log(this.state.userEditObject);
  }

  changeEditUSerStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }


  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    })
  }

  getNewUserData = (name, tel, Permission) => {
      var item = {};
      item.id = uuidv1();
      item.name = name;
      item.tel = tel;
      item.Permission = Permission;

      var items = this.state.data;
      items.push(item);
      this.setState({
        data: items
      });
      localStorage.setItem("userData", JSON.stringify(this.state.data));
  }

  getUserEditInfoFromEditApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
    localStorage.setItem("userData", JSON.stringify(this.state.data));
  }

  deleteButtonClick = (idUser) => {
    // console.log("in ra:" + idUser);
    var tempData = this.state.data;
    //Cach 1: dung ham filter
    tempData = tempData.filter(item=>item.id != idUser);
    this.setState({
      data:tempData
    });
    localStorage.setItem("userData", JSON.stringify(tempData));
    // Cach 2:
    // this.tempData.forEach((value, key) => {
    //   if (value.id === idUser) {
    //     console.log(key);
    //   }
    // })
}

  render() {
    var ketqua = [];
    this.state.data.forEach(element => {
      if (element.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(element);
      }
    });

    // localStorage.setItem("key binh", "binh 1"); // De luu tru thong tin tren may local cua may client nhu cookey.
    // console.log("localStorage:1::" + localStorage.getItem("key binh"));
    // localStorage.removeItem("key binh");
    // console.log("localStorage:2::" + localStorage.getItem("key binh"));

    // JSON.stringify() Ham chuyen 1 array thanh JSON
    // JSON.parse Hamm chuyen 1 json thanh array.

    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <SearchForm 
              getUserEditInfoFromEditApp = {(info)=>this.getUserEditInfoFromEditApp(info)}
              ketNoi = {() => this.doiTrangThai()} 
              hienThiForm = {this.state.hienThiForm} 
              userEditObject = {this.state.userEditObject}
              getTextSearchProps = {(dl) => this.getTextSearch(dl)} 
              editUserStatus = {this.state.editUserStatus} 
              changeEditUSerStatus = {()=> this.changeEditUSerStatus()}/>
              <div className="col-12">
                <hr />
              </div>
              <TableData
               dataUser = {ketqua} 
               editFun = {(user)=> this.editUser(user)} 
               changeEditUSerStatus = {()=> this.changeEditUSerStatus()}
               deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)} />
              <AddUser hienThiForm = {this.state.hienThiForm} add = {(name, tel, Permission)=> this.getNewUserData(name, tel, Permission)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
