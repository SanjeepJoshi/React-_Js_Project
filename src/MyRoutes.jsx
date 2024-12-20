import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Weather from './pages/Weather'
import FormBuilder from './pages/FormBuilder'
import Tictactoe from './pages/Tictactoe'


const MyRoutes = () => {
  return (
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />


        </Route>
        <Route path="/weather" element={<Weather/>} />
        <Route path="/form" element={<FormBuilder/>} />
        <Route path="/tictactoe" element={<Tictactoe/>} />
        
     </Routes>
     
     </BrowserRouter>
  )
}

export default MyRoutes
