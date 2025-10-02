

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Landing from './landingPage/Landing'
import { Route, Routes } from 'react-router-dom'
import Member from './Members/Member'
import Event from './Events/Event'
import Gallery from './Gallery/Gallery'
import Notice from './Notice/Notice'
import Upload from './Upload/Upload'

import DhishaanEvent from './Events/DhishaanEvent'
import DrishyaaEvent from './Events/DrishyaaEvent'
// import UtthaanEvent from './Events/UtthaanEvent'
import UploadNotice from './Upload/UploadNotice'
import UploadPoster from './Upload/UploadPoster'
import CurrentEvent from './Events/CurrentEvent'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar/>

      {/* Main content grows to push footer down */}
      <main className="flex-grow">
        <Routes> 
          <Route path='/' element={<Landing/>} />
          <Route path='/Members' element={<Member/>} />
          <Route path='/Events' element={<Event/>} />
          <Route path='/Gallery' element={<Gallery/>} />
          <Route path='/Notice' element={<Notice/>} />
          <Route path='/Upload' element={<Upload/>} />
          <Route path='/api/DrishyaaEvent' element={<DrishyaaEvent/>} />
          <Route path='/api/DhishaanEvent' element={<DhishaanEvent/>} />
          {/* <Route path='/api/UtthaanEvent' element={<UtthaanEvent/>} /> */}
          <Route path='/api/UploadNotice' element={<UploadNotice/>} />
          <Route path='/api/UploadPoster' element={<UploadPoster/>} />
          <Route path='/api/CurrentEvent' element={<CurrentEvent/>} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App
