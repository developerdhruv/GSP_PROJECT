import React from 'react'
import './App.css'
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import './index.js'

import Carbonfoot from './Pages/Carbonfoot.js'
import Temp from './Components/Temp.js';
import Chain from './Components/Chain.js';
import CO2 from './Components/CO2.js';

const App = () => {
  return (
    <div className='main'>    
      <div className='nav-container'>
        <a className='Heading'>Inventory</a>
        <a href='/footcar' className='subhead'>Carbon FootPrint Cal..</a>
        <a className='subhead'>Water FootPrints</a>
        <a className='subhead'>Talk To Future</a>
        <a className='subhead'> Discussion Panel</a>
        <a className='subhead'>EnviroGPT</a>
        <a className='subhead'>Discuss</a>
      </div>
      <div>
        <Temp/>
      </div>
      <div>
        
      </div>
      <div><CO2/></div>
      
    </div>
  )
}

export default App
