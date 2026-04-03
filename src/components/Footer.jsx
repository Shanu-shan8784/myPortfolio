import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-blue-900/30 pt-16 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Brand & Socials */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl font-black tracking-tighter bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent uppercase">
            SHAHNAWAZ HUSSAIN
          </h2>
          <p className="text-slate-400 max-w-xs mx-auto md:mx-0 leading-relaxed text-sm">
            Crafting high-performance MERN stack applications with a focus on clean code and user experience.
          </p>
          <div className="flex justify-center md:justify-start gap-5 pt-2">
            <Link href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-all transform hover:-translate-y-1">
              <FaGithub size={30} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-all transform hover:-translate-y-1">
              <FaLinkedin size={30} />
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Get in Touch</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-blue-500" />
              <a href="mailto:nawazshani7788@gmail.com" className="hover:text-blue-400">nawazshani7788@gmail.com</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhone className="text-blue-500" />
              <span>03488246833</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Skardu, Pakistan</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-[0.2em]">
        <p>© {currentYear} Shahnawaz Hussain. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-400">Privacy Policy</Link>
          <Link to="/" className="hover:text-blue-400">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;