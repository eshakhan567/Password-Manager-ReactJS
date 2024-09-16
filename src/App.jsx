import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Manager from './components/Manager'
import Footer from './components/Footer'
function App() {
 

  return (
    <>
   <Navbar/>
    <div className='min-h-[70vh]  bg-green-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
   <Manager/>
    </div>
   <Footer/>
    </>
  )
}

export default App
