import { motion } from 'framer-motion';
import { GraduationCap, ShieldAlert, Cpu, Heart } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
    title: "University of Vavuniya",
    subtitle: "4th Year Undergraduate",
    desc: "Specialize in networking tracks, cloud engineering modules, and system architecture fundamentals."
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-ocean-400" />,
    title: "Secure Network Design",
    subtitle: "Enterprise Routing & Switching",
    desc: "Focused on configuring firewall policies, VPN topologies, subnet segmentations, and CISCO topologies."
  },
  {
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    title: "Scalable Cloud Architecture",
    subtitle: "AWS & Hybrid Clouds",
    desc: "Designing highly available cloud environments with serverless designs, autoscaling groups, and VPC setups."
  }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 90,
        damping: 15
      }
    })
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40 transition-colors duration-300">
      {/* Background shape */}
      <div className="absolute right-[5%] top-[10%] w-[300px] h-[300px] bg-ocean-500/5 rounded-full blur-[80px] -z-10" />
      <div className="absolute left-[5%] bottom-[10%] w-[250px] h-[250px] bg-emerald-500/5 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4 transition-colors duration-300">
            About <span className="text-gradient-emerald-blue">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-ocean-500 mx-auto rounded-full" />
        </div>

        {/* Row 1: Profile Image and Bio text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">

          {/* Profile Picture Card */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={imageVariants}
          >
            <div className="relative group select-none">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-ocean-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-45 transition-opacity duration-500" />

              {/* Frame */}
              <div className="relative glass-card p-3 rounded-[2.5rem] border border-white/10 group-hover:border-emerald-500/30 transition-all duration-500 animate-float">
                <div className="w-[240px] h-[288px] min-[375px]:w-[280px] min-[375px]:h-[336px] sm:w-[300px] sm:h-[360px] rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-800 transition-colors duration-300">
                  <img
                    src="/resources/dp.jpg"
                    alt="Pasindu Naranjana Profile Picture"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white font-display">
                          <span class="text-6xl font-extrabold text-gradient-emerald-blue">PN</span>
                          <span class="text-xs text-slate-500 mt-4 tracking-widest uppercase">Network & Cloud Engineer</span>
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Badge Overlay */}
                <div className="absolute -bottom-4 -right-2 min-[375px]:-right-4 bg-slate-900/90 border border-slate-700/60 p-3 rounded-2xl flex items-center gap-3 shadow-xl backdrop-blur-md">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                    🌐</div>
                  <div>
                    <p className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider">Specializing in</p>
                    <p className="text-slate-200 font-bold transition-colors duration-300">Networking & Cloud Computing</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biography Text */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={textVariants}
          >
            <span className="tracking-widest text-emerald-400 font-bold uppercase mb-2">Introduction</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-100 mb-6 leading-tight transition-colors duration-300">
              Engineering connections and designing the clouds of tomorrow.
            </h3>
            <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed mb-5 transition-colors duration-300">
              BICT (Hons) undergraduate at the University of Vavuniya with a strong foundation in computer networking, routing, switching, subnetting, and IP addressing using Cisco Packet Tracer and CCNA-based learning.
            </p>
            <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed mb-6 transition-colors duration-300">
              Experienced with Linux and Ubuntu environments, basic Python programming, and AWS cloud fundamentals. Passionate about network infrastructure, cloud technologies, and system administration, with strong problem-solving and analytical skills. Seeking a Network Engineering or Cloud Computing Internship to apply technical knowledge, gain hands-on industry experience, and contribute to reliable and secure IT infrastructure solutions
            </p>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl glass border border-slate-800/80 text-xs sm:text-sm text-slate-300 max-w-xl transition-colors duration-300">
              <Heart className="w-5 h-5 text-emerald-500 fill-emerald-500/20 shrink-0" />
              <span>Dedicated to continuous learning and cloud automation technologies.</span>
            </div>
          </motion.div>

        </div>

        {/* Row 2: Highlights Grid (horizontal 3-column) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-slate-900 transition-colors duration-300"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-emerald-500/20 flex flex-col gap-4 items-start"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shrink-0 shadow-md transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <span className="text-[9px] tracking-widest text-emerald-500 font-bold uppercase block mb-1">{item.subtitle}</span>
                <h4 className="font-display font-bold text-slate-100 mb-2 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-slate-400 leading-relaxed transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
