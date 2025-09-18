import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/sidebar'
import { Route, Routes } from 'react-router-dom'
import Order from './pages/Orders/Order'
import List from './pages/List/List'
import Add from './pages/Add/Add'
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { url } from './assets/assets'


const App = () => {
 const url = "http://localhost:4000";  // make sure it's just a string, not an object
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes >
          <Route path='/add' element={<Add url={url}/>}/ >
           <Route path='/list' element={<List url={url}/>}/ >
            <Route path='/orders' element={<Order url={url}/>}/ >
        </Routes>
      </div>
    </div>
  )
}

export default App
