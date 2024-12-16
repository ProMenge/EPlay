import { Route, Routes } from 'react-router-dom'

import Categories from './pages/Categories'
import Home from './pages/Home'
import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
