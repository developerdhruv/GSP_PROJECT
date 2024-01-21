import React from 'react'
import './App.css'
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import './main.jsx'

import CarbonFoot from './Pages/CarbonFoot.jsx'

const App = () => {
  return (
    <div>    
      <div className='nav-container'>
        <a className='Heading'>Inventory</a>
        <a href='/footcar' className='subhead'>Carbon FootPrint Cal..</a>
        <a className='subhead'>Water FootPrints</a>
        <a className='subhead'>Talk To Future</a>
        <a className='subhead'> Discussion Panel</a>
        <a className='subhead'>EnviroGPT</a>
        <a className='subhead'>Discuss</a>
      </div>
      
    </div>
  )
}

export default App
