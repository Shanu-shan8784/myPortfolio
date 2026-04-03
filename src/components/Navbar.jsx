import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // 1. Use NavLink for active states
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineHome, 
  HiOutlineUser, 
  HiOutlineCode, 
  HiOutlineBriefcase, 
  HiOutlineMail 
} from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', icon: <HiOutlineHome />},
    { name: 'About', href: '/about', icon: <HiOutlineUser />},
    { name: 'Skills', href: '/skills', icon: <HiOutlineCode />},
    { name: 'Projects', href: '/projects', icon: <HiOutlineBriefcase />},
    { name: 'Contact', href: '/contact', icon: <HiOutlineMail />},
  ];

  return (
    <nav className="bg-slate-950 text-white sticky top-0 z-50 shadow-lg border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <NavLink to="/" className="text-2xl font-bold bg-linear-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent tracking-tighter">
              PORTFOLIO.
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => 
                    `relative px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2
                    ${isActive ? 'text-blue-400' : 'text-slate-400 hover:text-blue-400'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Icon Visibility Fix: Increased size and added explicit text-blue-500 */}
                      <span className={`text-lg ${isActive ? 'text-blue-400' : 'text-blue-500/70 group-hover:text-blue-400'}`}>
                        {link.icon}
                      </span>
                      {link.name}
                      {/* Active Underline */}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 
                        ${isActive ? 'w-full shadow-[0_0_8px_rgba(59,130,246,0.8)]' : 'w-0'}`}>
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white hover:bg-slate-900 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-t border-blue-900/50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium transition-all 
                    ${isActive 
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                      : 'text-slate-300 hover:bg-slate-900 border border-transparent'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Mobile Icon Fix */}
                      <span className={`text-2xl ${isActive ? 'text-blue-400' : 'text-blue-500'}`}>
                        {link.icon}
                      </span>
                      {link.name}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;