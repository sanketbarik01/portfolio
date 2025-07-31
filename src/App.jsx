import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path = "*" element = {<NotFound />} />
        <Route/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
