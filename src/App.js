import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome text ="Welcome to react" />
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
}

class Welcome extends React.Component {
  render(){
    const { text } = this.props;
  return (
    <h1 classname="App-title"> {text} </h1>
  );
}
}

export default App;
