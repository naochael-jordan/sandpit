import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

interface MessageProps {
  message: string;
}

const Hoge: React.FC<MessageProps> = ({ message }: MessageProps) => (
  <div>zzzz{message}</div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Hoge message={`fefe`} />
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
}

export default App;
