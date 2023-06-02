import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalCss } from './styles'

import Home from './pages/Home'
import Products from './pages/Products'
import Checkout from './pages/Checkout'

import { store } from './store'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/:id" element={<Products />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
