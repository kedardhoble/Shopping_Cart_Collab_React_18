import React from 'react'
import HomeContainer from '../pages/home/HomeContainer'
import AboutContainer from '../pages/about/AboutContainer'
import StoreContainer from '../pages/store/StoreContainer'
import CartContainer from '../pages/cart/CartContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const ContainerRouter = () => {
  return (
    <div>
    <div className="mb-4 container">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/store" element={<StoreContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
        </BrowserRouter>
      </div>       
    </div>
  )
}

export default ContainerRouter
