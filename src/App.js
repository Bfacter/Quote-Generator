import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  let [data, setData] = useState([]);
  async function FetchData() {
    let response = await axios("https://api.adviceslip.com/advice");
    let user = await response.data.slip;
    setData(user);
    console.log(data);
  }

  return (
    <div className="app">
      <div className="card">
        <div className="heading">{data.advice}</div>
        <button onClick={FetchData} className="button">
          <span> Get Quote</span>
        </button>
      </div>
    </div>
  );
}

export default App;
