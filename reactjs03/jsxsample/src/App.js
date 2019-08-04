import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


// De convert html sang jsx minh co the dungf tool de convert html sang jsx nhu la: https://magic.reactjs.net/htmltojsx.htm
// Sau khi convert xong thi copy ma html vao cac component minh muon

const a1 = "Binh";
class App1 extends Component {
  render() {
    return (
      <div>
        <h3 className="nut">Toi la: {a1}</h3>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
            Display value
          </label>
        </div>
      </div>
    );
  }
}

// Vi du ve Map
const so = [1,,3,4,5,6];
const so2 = so.map((x) => x * 2 + ", ");
const so3 = so.map((x) => (
  <div>
    <li>So: {x * 3}</li>
  </div>
));

class App2 extends Component {
  render() {
    return (
      <div>
        {so2}
        <br/>
        {so3}
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <App1/>
        <App2/>
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
      </header>
    </div>
  );
}

export default App;
