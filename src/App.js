import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    toggle : true
  }

  toggle = () => {
    this.setState({
      toggle : !this.state.toggle
    });
  }
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
        {this.state.toggle && 
           <p>This should hide and show</p>
        }
      
        <button onClick={this.toggle}>hide/show</button>
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
