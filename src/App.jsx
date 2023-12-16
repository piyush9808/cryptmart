import React from 'react'
import './App.css'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Coinpage from './Pages/Coinpage'


function App() {
  return (

    <BrowserRouter>
        
      <div className="bg-[#14161a] min-h-screen text-[#FFD700]">
      <Header/>
      <Routes>
        <Route path="/" Component={Homepage} exact />
        <Route path="/coins/:id" Component={Coinpage} exact />
      </Routes>
      </div>
    </BrowserRouter>


  )
}

export default App
