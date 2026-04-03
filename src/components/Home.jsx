import {Link, useNavigate} from 'react-router-dom';
// 1. Import the component
import {FaGithub,FaLinkedin} from 'react-icons/fa';

export default function Home() {
  const navigate = useNavigate()
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-black via-blue-950 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl mb-6 text-white font-bold">
          Hi, I'm{" "}
          <span className="relative inline-block group">
            {/* The Gradient Text */}
            <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Shahnawaz Hussain
            </span>
            
            {/* The Animated Underline */}
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-linear-to-r from-blue-400 to-cyan-400 transition-all duration-500 group-hover:w-full"></span>
          </span>
        </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer | UI/UX Designer | Problem Solver
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() =>navigate('/projects')}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
              >
                View My Work
              </button>
              <button
                onClick={() =>navigate('/contact')}
                className="px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center md:justify-start mt-12">
              <Link to="https://github.com" className="text-gray-400 hover:text-blue-400 transition-colors" target='_blank'>
                <FaGithub size={35} />
              </Link>
              <Link to="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors" target='_blank'>
                <FaLinkedin size={35} />
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative group">
              {/* Glowing Background effect for the image */}
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative aspect-square w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <img
                  src="./src/assets/shan.jpg"
                  alt="Shahnawaz Hussain"
                  className="rounded-full w-full h-full object-cover border-4 border-blue-950 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] hover:animate-spin-slow-reverse"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}