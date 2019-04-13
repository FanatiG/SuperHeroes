import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
///////////////////F/O/O/T/E/R///////////////////////////////////////////////////

import React, { Component } from 'react';
import logo from '../../logo.svg';
import './footer.css';

class Footer extends Component {
  sayHi() {
    console.log("HELLO");
    document.getElementById("footer").style.color="red";
  }
  loopty() {
    console.log("HELLO");
    document.getElementById("textik").style.fontSize="calc(11px + 2vmin)";
  }
  loopty2() {
    console.log("HELLO");
    document.getElementById("textik").style.fontSize="calc(10px + 2vmin)";
  }
  render() {
    return (
      <div className="footer" onClick={this.sayHi}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onMouseOver={this.loopty} id="textik" onMouseLeave={this.loopty2}>
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

export default Footer;
