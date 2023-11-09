import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//? pages
import Home from './pages/home'

//component

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Home/>}/>
        </Routes>
      </BrowserRouter>

    </React.Fragment>
  )
}

export default App