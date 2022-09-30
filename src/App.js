import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import ZimServices from './Components/ZimServices/ZimServices';
import { useEffect, useState } from 'react';
import Blog from './Components/Blog/Blog';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <ZimServices

      ></ZimServices>
      <Blog></Blog>
     
    </div>
  );
}

export default App;
