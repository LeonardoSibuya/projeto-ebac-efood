import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalCss } from './styles'
import Home from './pages/Home'
import Products from './pages/Products'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
