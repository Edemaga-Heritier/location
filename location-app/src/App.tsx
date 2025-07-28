
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayouts from './layouts/MainLayouts'
import Home from './pages/Home'
import HouseDetails from './pages/HouseDetails'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {


  return (
    <Routes>
      <Route element={<MainLayouts />}>
      <Route path="/" element={<Home />} />
      <Route path="/house/:id" element={<HouseDetails />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<div>Page not found</div>} />

      </Route>
    </Routes>
  )
}

export default App
