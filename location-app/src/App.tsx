
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayouts from './layouts/MainLayouts'
import Home from './pages/Home'
import HouseDetails from './pages/HouseDetails'

function App() {


  return (
    <Routes>
      <Route element={<MainLayouts />}>
      <Route path="/" element={<Home />} />
      <Route path="/house/:id" element={<HouseDetails />} />
      </Route>
    </Routes>
  )
}

export default App
