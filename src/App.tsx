import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Works from './components/pages/Works';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
// import Project from './components/pages/Project';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/footer';
import NotFound from './components/pages/404';
import ScrollToTop from './components/ScrollToTop';
function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/works' element={<Works/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        {/* <Route path='/project' element={<Project/>}/> */}
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
