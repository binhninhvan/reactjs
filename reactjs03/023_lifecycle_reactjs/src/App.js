import React, {Component} from 'react';
import './App.css';
import NoiDung from './NoiDung';

// To chuc lai component App theo y minh de lam vi du
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trangthai : "khoitao",
      trangthaiProps : "Khoi Tao 2"
    }
  }
  
  
  componentWillMount() {
    console.log("componentWillMount da chay");
  }
  

  render() {
    console.log(" render da chay ===State.TrangThai=" + this.state.trangthai);
    return (
      <div className="App">
        <button onClick={()=> this.capNhatState()}>Test next step State</button>
        <NoiDung ten={this.state.trangthaiProps}/>
      </div>
    );
  }

  capNhatState = () => {
    this.setState ({
      trangthai: "Trang thai duoc update",
      trangthaiProps: "Trang thai Props duoc update"
    })
    console.log("==capNhatState da chay ===State.TrangThai=" + this.state.trangthai);
  }

  componentDidMount() {
    console.log("componentDidMount da chay");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate da chay cua App.js");
  }
  

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate da chay");
  }
  
// Ham nay duoc kich hoat khi goi den 1 phuong thuc cap nhat state
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate da chay");
    return true;
    // Return false thì không làm gi
    // Return true thi se tu dong goi cac ham: componentWillUpdate , render, componentDidMount 
  }
  
  
}

export default App;
