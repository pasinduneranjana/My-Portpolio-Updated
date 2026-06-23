import { motion } from 'framer-motion';
import { Download, ArrowRight, Server, Shield, Cpu, Facebook, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15, delay: 0.3 },
    },
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-ocean-500/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center text-center z-10">

        {/* Text Content */}
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-emerald-500/20 text-emerald-400 font-semibold tracking-wide mb-6 shadow-sm shadow-emerald-500/5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Specializing in Network & Cloud Computing
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1] mb-6 max-w-4xl transition-colors duration-300"
          >
            Hi, I'm{' '}
            <span className="text-gradient-emerald-blue font-extrabold relative">
              Pasindu Naranjana
            </span>
            <br />
            <span className="text-slate-200 mt-3 block sm:text-4xl md:text-5xl font-medium transition-colors duration-300">
              A Network & Cloud Enthusiast.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="sm:text-base md:text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed font-sans transition-colors duration-300"
          >
            Designing resilient cloud infrastructures, implementing secure routing architectures,
            and creating next-generation automated systems to connect global organizations securely.
          </motion.p>

          {/* Call-to-Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center justify-center"
          >
            <a
              href="/resources/cv.pdf"
              download="Pasindu_Naranjana_CV.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-sans text-sm font-semibold hover:from-emerald-400 hover:to-emerald-500 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              Download CV
            </a>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl glass border border-slate-700 hover:border-ocean-500 hover:bg-ocean-500/5 text-slate-200 hover:text-slate-900 hover:text-white font-sans font-semibold transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 text-ocean-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-4 items-center justify-center mt-6"
          >
            <a 
              href="https://www.facebook.com/share/1AJEBTd2Uq/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3.5 rounded-full glass border border-slate-800 text-slate-200 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 hover:-translate-y-1 shadow-md"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-6 h-6" strokeWidth={1.5} />
            </a>
            <a 
              href="https://www.linkedin.com/in/pasindu-neranjana?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3.5 rounded-full glass border border-slate-800 text-slate-200 hover:text-ocean-400 hover:border-ocean-500/50 hover:bg-ocean-500/10 transition-all duration-300 hover:-translate-y-1 shadow-md"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" strokeWidth={1.5} />
            </a>
            <a 
              href="https://github.com/pasinduneranjana" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3.5 rounded-full glass border border-slate-800 text-slate-200 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1 shadow-md"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" strokeWidth={1.5} />
            </a>
          </motion.div>

          {/* Floating mini stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 border-slate-800/80 mt-16 pt-8 w-full max-w-2xl justify-items-center transition-colors duration-300"
          >
            <div className="flex items-center gap-3 justify-center">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Server className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Cloud Deployments</p>
                <p className="font-semibold text-slate-200 transition-colors duration-300">AWS</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="p-2.5 rounded-lg bg-ocean-500/10 text-ocean-400">
                <Shield className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Routing & Security</p>
                <p className="font-semibold text-slate-200 transition-colors duration-300">Cisco Enterprise</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Systems Platform</p>
                <p className="font-semibold text-slate-200 transition-colors duration-300">Linux</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
