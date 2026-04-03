import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Footer from './components/Footer'
import {FaWhatsapp} from 'react-icons/fa';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
        {/* --- WHATSAPP STICKY ICON --- */}
      <a 
        href="https://wa.me/923488246833?text=How%20can%20I%20get%20more%20information?"
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center"
      >
        {/* Tooltip */}
        <span className="mr-3 scale-0 group-hover:scale-100 transition-all duration-300 origin-right bg-gray-800 text-white text-xs py-1.5 px-3 rounded shadow-lg">
          Chat with us
        </span>

        {/* Icon Container */}
        <div className="w-14 h-14 bg-[#25D366] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:bg-[#128C7E] hover:-translate-y-1.5 flex items-center justify-center border-2 border-white/20">
          <i className="text-white font-bold text-3xl">
            <FaWhatsapp size={24} /></i>
        </div>
      </a>
      {/* ---------------------------- */}
      </BrowserRouter>
    </>
  )
}

export default App
