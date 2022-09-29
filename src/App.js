import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import ZimServices from './Components/ZimServices/ZimServices';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <ZimServices

      ></ZimServices>
     
    </div>
  );
}

export default App;
