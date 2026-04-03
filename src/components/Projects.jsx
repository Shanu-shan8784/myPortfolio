import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss } from "react-icons/si";

const projectData = [
  {
    title: "QuickStay - Hotel Management",
    description: "A comprehensive booking platform featuring real-time room filtering, guest reviews, and a dedicated owner dashboard. Solved complex MERN stack connection and security challenges during development.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
  },
  {
    title: "Smart Expense Tracker",
    description: "A functional finance tool using Local Storage for data persistence. Features real-time expense calculations and category-based filtering.",
    tech: ["React.js", "Tailwind CSS", "Local Storage"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
  },
  {
    title: "Portfolio Website v1",
    description: "A high-performance portfolio with advanced Tailwind animations, dark mode, and a responsive glassmorphism UI.",
    tech: ["React", "Framer Motion", "Tailwind"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-2">My Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            Featured <span className="text-blue-400">Projects</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-3xl border border-blue-900/20 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-500 ${
                project.featured ? "md:col-span-2 border-blue-500/30" : ""
              }`}
            >
              {/* Project Icon & Links */}
              <div className="flex justify-between items-start mb-8">
                <FiFolder className="text-4xl text-blue-500" />
                <div className="flex gap-4 text-slate-400">
                  <a href={project.github} className="hover:text-white transition-colors"><FiGithub size={22} /></a>
                  <a href={project.live} className="hover:text-blue-400 transition-colors"><FiExternalLink size={22} /></a>
                </div>
              </div>

              {/* Content */}
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tag, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full border border-blue-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Subtle Highlight for Featured */}
              {project.featured && (
                <div className="absolute top-4 right-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    Flagship Project
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}