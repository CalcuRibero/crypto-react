import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './Components/table';

function App() {
    
  const [cryptos, setCryptos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const getData = async () =>{
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    setCryptos(response.data);
    console.log(response.data);
  };

  useEffect( () => getData(), []);

  return (
    <div className = {darkMode ? "App dark" : "App"}>
      <button className="btn-dark-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light" : "Dark"}
      </button>
      <div className="header">
        <h1>Crypto Currency</h1>
      </div>
      <Table value= {cryptos} />
    </div>
  );
}

export default App;
