import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Works from './components/pages/Works';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/footer';
function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/works' element={<Works/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
