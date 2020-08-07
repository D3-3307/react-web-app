import React from 'react';
import logo from './logo.svg';
import JSBridge from 'statsjsbridge';
import './App.css';

const jsApi = new JSBridge();
jsApi.toggleDevMode()

function send() {
  jsApi.sendStats().then(d => console.log(d)).catch(e => console.log(e))
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button
          className="App-link"
          onClick={send}
        >
          发送性能数据
        </button>

      </header>
    </div>
  );
}

export default App;
