import React, {useState} from 'react';
import './App.css';
import Cart from './components/cart'
import Shop from './components/shop';
import Display from './components/display';
import Search from './components/search';
import Bevarages from './components/bevarages'
function App() {
  
  return (
    <div className="App">
        <Search />
        <Shop/>
        <Display />
        <Bevarages />
    </div>
  );
}

export default App;