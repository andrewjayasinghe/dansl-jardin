import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  


const [msgeg, setMsg] = useState("");
const [ms2, setMs2] = useState("");

  useEffect(() => {
    axios.get("/order/get/").then((response) => {
      setMsg(JSON.stringify(response.data))
    });
  }, []);

  useEffect(() => {
    axios.get("/api/").then((response) => {
      setMs2(JSON.stringify(response.data));
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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


          <input type="submit" value="Submit"/>
          <input type="button" value="click" onClick={()=>{console.log(ms2)}}/>
          <input type="button" value="click" onClick={()=>{console.log(msgeg)}}/>

 



    </div>
  );
}

export default App;
