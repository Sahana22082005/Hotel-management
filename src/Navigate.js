import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage, { HomePage } from './components/HomePage'
import RegistrationForm from './components/RegistrationFrom'
import LoginPage from './components/LoginPage'

const Navigate = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegistrationForm/>}></Route>
        <Route path='/Login' element={<LoginPage/>}></Route>
        <Route path='/Home'  element={<HomePage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navigate;