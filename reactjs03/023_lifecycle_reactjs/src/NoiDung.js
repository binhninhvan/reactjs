import React, { Component } from 'react';

class NoiDung extends Component {

    constructor(props) {
        super(props);
    }
    

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps da chay cua NoiDung.js == nextProps.name=" + nextProps.ten);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate da chay cua NoiDung.js");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate da chay cua NoiDung.js");
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate da chay cua NoiDung.js");
    }
    

    render() {
        console.log(" render NoiDung.js da chay ===this.props.ten=" + this.props.ten);
        return (
            <h3>Xin chao {this.props.ten}</h3>
        );
    }
}

export default NoiDung;