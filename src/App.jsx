import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

import './App.css'
import Layout from './pages/layout'
import Home from './pages/home'
import Prices from './pages/prices'


function App() {
  
  return (
    <>

    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/prices" element={<Prices />}/>
      </Route>
    </Routes>

    </>
  )
}


export default App
