import { useState } from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Landing from './routes/Landing'
import Signup from './routes/Signup'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  )
}

export default App
