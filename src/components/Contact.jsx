import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { useState } from 'react';
// 1. Import Toastify components and CSS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Create a loading toast
    const toastId = toast.loading("Sending your message...");

    const formData = new FormData(event.target);
    formData.append("access_key", "bc6da228-5b10-42a1-8f15-077a5e06166a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // 2. Update toast to success
        toast.update(toastId, { 
          render: "Message Sent Successfully! 🚀", 
          type: "success", 
          isLoading: false, 
          autoClose: 5000 
        });
        event.target.reset();
      } else {
        // 3. Update toast to error
        toast.update(toastId, { 
          render: data.message || "Submission failed", 
          type: "error", 
          isLoading: false, 
          autoClose: 5000 
        });
      }
    } catch (error) {
      toast.update(toastId, { 
        render: "Network error. Please try again later.", 
        type: "error", 
        isLoading: false, 
        autoClose: 5000 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* 4. Add ToastContainer here (placed once in your app) */}
      <ToastContainer position="top-right" theme="dark" />

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-125 h-125 bg-blue-600/15 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-2">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Let's Build Something <span className="text-blue-400 animate-pulse">Great</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Contact Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="flex items-start gap-6 group p-4 rounded-2xl transition-all hover:bg-slate-900/40">
              <div className="p-4 bg-slate-900 border border-blue-900/50 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                <FiMail size={26} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Email Me</h4>
                <a href="mailto:nawazshani7788@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">nawazshani7788@gmail.com</a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-6 group p-4 rounded-2xl transition-all hover:bg-slate-900/40">
              <div className="p-4 bg-slate-900 border border-blue-900/50 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                <FiPhone size={26} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Call Me</h4>
                <a href="tel:03488246833" className="text-slate-400 hover:text-blue-400 transition-colors">03488246833</a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-6 group p-4 rounded-2xl transition-all hover:bg-slate-900/40">
              <div className="p-4 bg-slate-900 border border-blue-900/50 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                <FiMapPin size={26} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Location</h4>
                <p className="text-slate-400">Skardu, Pakistan</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: CONTACT FORM */}
          <motion.form 
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative p-8 md:p-10 rounded-3xl backdrop-blur-md bg-slate-900/80 border border-blue-600/20 shadow-[0_0_60px_-10px_rgba(37,99,235,0.4)]"
          >
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                  <input name='name' type="text" required placeholder="Shahnawaz Hussain" className="w-full bg-slate-950 border border-blue-900/50 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-blue-500/50 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                  <input name='email' type="email" required placeholder="example@gmail.com" className="w-full bg-slate-950 border border-blue-900/50 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-blue-500/50 outline-none" />
                </div>
              </div>
              
              <div className="space-y-2 mb-8">
                <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                <textarea name='message' rows="5" required placeholder="How can I help you?" className="w-full bg-slate-950 border border-blue-900/50 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-blue-500/50 outline-none resize-none" />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <FiSend className="text-lg group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform" />}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}