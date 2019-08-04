import React from './../../node_modules/react';
import '../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import DieuHuongURL from '../router/DieuHuongURL';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <DieuHuongURL/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
