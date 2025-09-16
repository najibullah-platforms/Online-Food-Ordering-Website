import React from 'react'
import { assets } from '../../assets/assets'
import './AppDownload.css'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <h1>Download App for Better Experices <br/> Tomato App</h1>
      <div className='app-download-platforms'>
         <img src={assets.play_store} alt="" />
         <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
