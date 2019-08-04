import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Kieu binh thuong
function Binh() {
  return <div>Nguyen Thai Binh</div>;
}

function Binh1() {
  return (
    <div>
      <h2>
        Nguyen Van Than
      </h2>
    </div>
    );
}

// Cach khai bao component 2, dung anonymous
var Two = function() {
  return (
    <div>
        <h2>Cach khai bao component 2, anonymous</h2>
    </div>
  );
}

var Three = () => (
    <div>
        <h2>Cach khai bao component 3, arrow</h2>
    </div>
);

// Kieu component class, phai import doi tuong component
class Four extends Component {
  // Cos function, constructor
  render() {
    return (
      <div>
          <button>Four component</button>
      </div>
    );
  }
};

class Five extends Component {
  render() {
    return (
      <div>
        <button>Five component</button>
      </div>
    );
  }
}

// Su dung props cach 1
function NumberOne(props) {
  return (
      <div className = "col-6">
        <div className="card">
          <img className="card-img-top" src={props.linkanh} alt=""/>
          <div className = "card-body">
            <h4 className = "card-title">{props.tieude}</h4>
            <p className = "card-text">{props.linkanh}</p>
          </div>
        </div>
      </div>
  )
}

// Su dung props cach 2 dung class
class NumberTwo extends Component {
  render() {
    return (
      <div className = "col-4">
        <div className="card">
          <img className="card-img-top" src={this.props.linkanh} alt=""/>
          <div className = "card-body">
            <h4 className = "card-title">{this.props.tieude}</h4>
            <p className = "card-text">{this.props.linkanh}</p>
          </div>
        </div>
      </div>
    );
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <Binh/>
        <Binh1/>
        <Two/>
        <Three/>
        <Four/>
        <Five/> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      <div className="container">
        <div className="row">
          <NumberOne tieude="San pham 1" linkanh="https://i-vnexpress.vnecdn.net/2019/07/18/7-1563438462_680x0.jpg"/>
          <NumberOne tieude="San pham 2" linkanh="https://i.a4vn.com/2019/7/16/preview-ve-nha-di-con-tap-67-vu-mac-ke-tieu-tam-so-gian-hang-mau-chay-lai-bat-ghen-doi-dung-thu-12113a.gif"/>
          <NumberTwo tieude="San pham 3" linkanh="https://i-vnexpress.vnecdn.net/2019/07/18/0-1563438458_680x0.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default App;
