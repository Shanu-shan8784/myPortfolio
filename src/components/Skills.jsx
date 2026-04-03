import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiJavascript, 
  SiPostman 
} from "react-icons/si";
import { VscCode } from "react-icons/vsc"; // More stable VS Code icon

const skillData = [
  { name: "MongoDB", icon: <SiMongodb />, level: "Database", color: "hover:text-green-500" },
  { name: "Express.js", icon: <SiExpress />, level: "Backend", color: "hover:text-gray-400" },
  { name: "React.js", icon: <SiReact />, level: "Frontend", color: "hover:text-blue-400" },
  { name: "Node.js", icon: <SiNodedotjs />, level: "Runtime", color: "hover:text-green-600" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Styling", color: "hover:text-cyan-400" },
  { name: "JavaScript", icon: <SiJavascript />, level: "Language", color: "hover:text-yellow-400" },
  { name: "Postman", icon: <SiPostman />, level: "API Testing", color: "hover:text-orange-500" },
  { name: "VS Code", icon: <VscCode />, level: "Editor", color: "hover:text-blue-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-600/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4">Technical Arsenal</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            Tech I Use to <span className="text-blue-400">Build</span>
          </h3>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Specializing in the MERN stack to create seamless, full-stack experiences from database architecture to responsive UI.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillData.map((skill, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-slate-900/40 border border-blue-900/20 rounded-2xl hover:bg-slate-900/60 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className={`text-5xl text-slate-500 mb-4 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1 ${skill.color}`}>
                {skill.icon}
              </div>

              <h4 className="text-xl font-bold text-white mb-1 tracking-tight">
                {skill.name}
              </h4>
              <p className="text-xs font-mono text-blue-500/70 uppercase tracking-widest">
                {skill.level}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-blue-600 to-cyan-400 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Development Logic Focus Section */}
        <div className="mt-20 p-8 rounded-3xl bg-linear-to-r from-blue-900/10 to-transparent border border-blue-900/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h4 className="text-2xl font-bold text-white mb-2">Clean Code & Logic Building</h4>
            <p className="text-slate-400">
              Beyond frameworks, I focus on professional development standards, environment security, and state management logic.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-blue-600/20 rounded-full border border-blue-600/30 text-blue-400 text-sm font-semibold">
              MERN Stack
            </div>
            <div className="px-4 py-2 bg-blue-600/20 rounded-full border border-blue-600/30 text-blue-400 text-sm font-semibold">
              RESTful APIs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}