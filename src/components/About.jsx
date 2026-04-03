import { HiOutlineBadgeCheck, HiOutlineLightBulb, HiOutlineAcademicCap } from "react-icons/hi";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-2">My Journey</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Turning Vision Into <span className="text-blue-400">Functional Reality</span>
              </h3>
            </div>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a passionate <span className="text-white font-medium">Junior MERN-stack developer</span> dedicated to building responsive and high-performance web applications. My approach combines technical logic with a keen eye for UI/UX design.
              </p>
              <p>
                Currently, I am focused on developing <span className="text-white font-medium">QuickStay</span>, a comprehensive hotel management platform. I thrive on solving complex problems, such as optimizing database security and managing environment variables.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-900/50 border border-blue-900/20 rounded-xl hover:border-blue-500/50 transition-colors">
                <HiOutlineLightBulb className="text-blue-400 text-3xl mb-3" />
                <h4 className="text-white font-bold mb-1">Problem Solver</h4>
                <p className="text-sm text-slate-500">I enjoy breaking down complex logic into manageable code.</p>
              </div>
              <div className="p-4 bg-slate-900/50 border border-blue-900/20 rounded-xl hover:border-blue-500/50 transition-colors">
                <HiOutlineBadgeCheck className="text-blue-400 text-3xl mb-3" />
                <h4 className="text-white font-bold mb-1">UI/UX Driven</h4>
                <p className="text-sm text-slate-500">Expertise in Tailwind CSS for advanced, "pro-level" animations.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Stats & Facts */}
          <div className="relative">
            <div className="bg-linear-to-br from-blue-900/20 to-slate-900/40 p-8 md:p-12 rounded-3xl border border-blue-500/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <HiOutlineAcademicCap className="text-blue-400" />
                Quick Highlights
              </h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="text-blue-400 font-bold text-xl">01.</div>
                  <div>
                    <h5 className="text-white font-semibold">MERN Stack Mastery</h5>
                    <p className="text-sm text-slate-500">Building scalable apps using MongoDB, Express, React, and Node.js.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-blue-400 font-bold text-xl">02.</div>
                  <div>
                    <h5 className="text-white font-semibold">Professional Standard</h5>
                    <p className="text-sm text-slate-500">Transitioning from basic coder to professional developer via structured learning.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-blue-400 font-bold text-xl">03.</div>
                  <div>
                    <h5 className="text-white font-semibold">Project Experience</h5>
                    <p className="text-sm text-slate-500">Hands-on experience with expense trackers and booking systems.</p>
                  </div>
                </li>
              </ul>

              {/* Download CV Call to Action */}
              <div className="mt-10">
                <a href="#" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/20">
                  Download My CV
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
