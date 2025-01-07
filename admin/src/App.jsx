import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import List from './pages/List/List'
import Add from './pages/Add/Add'
import Order from './pages/Order/Order'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className='app-content'>
      <Sidebar/>
      <Routes>
    <Route path="/add" element={<Add/>}/>
  <Route path="/list" element={<List/>}/> <Route path="/order" element={<Order/>}/>
      </Routes>

      </div>
    </div>
  )
}

export default App
