import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  state = {
    yyy: 111,
    zzz: 999
  };

  handleClick() {
    console.log(111);
    this.setState((state, props) => ({
      yyy: 222 + props.hoge + state.yyy
    }));
  }

  componentDidMount() {
    // this.setState((state, props) => ({
    //   yyy: 222 + props.hoge + state.yyy
    // }));
  }

  render() {
    return (
      <div onClick={() => this.handleClick()}>
        hoge{this.state.yyy}
        {this.state.zzz}
      </div>
    );
  }
}
