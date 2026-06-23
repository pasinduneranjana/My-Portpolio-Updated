import { motion } from 'framer-motion';
import {
  Globe, Cloud, Terminal, Cpu, Code2, Layers, Briefcase, ShieldCheck,
  Server, Network, Wifi, Shield, Box, Monitor, Settings, Wrench, Layout, CheckSquare, FileCode2
} from 'lucide-react';

const SKILLS_DATA = [
  {
    category: "Networking",
    description: "Designing routing structures, managing protocols, and addressing schemes.",
    skills: [
      { name: "TCP/IP", icon: <Network className="w-3.5 h-3.5" /> },
      { name: "Routing & Switching", icon: <Server className="w-3.5 h-3.5" /> },
      { name: "VLANs", icon: <Layers className="w-3.5 h-3.5" /> },
      { name: "DNS", icon: <Globe className="w-3.5 h-3.5" /> },
      { name: "DHCP", icon: <Settings className="w-3.5 h-3.5" /> },
      { name: "NAT", icon: <Shield className="w-3.5 h-3.5" /> },
      { name: "Network Troubleshooting", icon: <Wrench className="w-3.5 h-3.5" /> }
    ]
  },
  {
    category: "Cloud Computing",
    description: "Hosting secure web infrastructures and server virtualization platforms.",
    skills: [
      { name: "AWS", icon: <Cloud className="w-3.5 h-3.5" /> },
      { name: "Virtualization", icon: <Box className="w-3.5 h-3.5" /> },
      { name: "Cloud Security", icon: <ShieldCheck className="w-3.5 h-3.5" /> }
    ]
  },
  {
    category: "Operating Systems",
    description: "Enterprise system administration and script-based automation.",
    skills: [
      { name: "Linux", icon: <Terminal className="w-3.5 h-3.5" /> },
      { name: "Windows Server", icon: <Monitor className="w-3.5 h-3.5" /> }
    ]
  },
  {
    category: "Networking & Virtualization Tools",
    description: "Simulating enterprise systems and deploying lightweight application containers.",
    skills: [
      { name: "Cisco Packet Tracer", icon: <Network className="w-3.5 h-3.5" /> },
      { name: "Wireshark", icon: <Wifi className="w-3.5 h-3.5" /> },
      { name: "GNS3", icon: <Cpu className="w-3.5 h-3.5" /> },
      { name: "VMware", icon: <Layers className="w-3.5 h-3.5" /> },
      { name: "Docker", icon: <Box className="w-3.5 h-3.5" /> }
    ]
  },
  {
    category: "Programming Languages",
    description: "Writing scripts and compiled code for systems and applications.",
    skills: [
      { name: "C", icon: <FileCode2 className="w-3.5 h-3.5" /> },
      { name: "C++", icon: <FileCode2 className="w-3.5 h-3.5" /> },
      { name: "C#", icon: <FileCode2 className="w-3.5 h-3.5" /> },
      { name: "Java", icon: <Code2 className="w-3.5 h-3.5" /> },
      { name: "Python", icon: <Terminal className="w-3.5 h-3.5" /> },
      { name: "Bash", icon: <Terminal className="w-3.5 h-3.5" /> },
      { name: "JavaScript", icon: <Code2 className="w-3.5 h-3.5" /> }
    ]
  },
  {
    category: "Frameworks & Technologies",
    description: "Creating highly responsive, clean, and interactive interfaces.",
    skills: [
      { name: ".NET", icon: <Box className="w-3.5 h-3.5" /> },
      { name: "Node.js", icon: <Server className="w-3.5 h-3.5" /> },
      { name: "React", icon: <Code2 className="w-3.5 h-3.5" /> },
      { name: "Tailwind CSS", icon: <Layout className="w-3.5 h-3.5" /> },
      { name: "HTML5", icon: <Globe className="w-3.5 h-3.5" /> },
      { name: "CSS3", icon: <Layout className="w-3.5 h-3.5" /> }
    ]
  },
  {
    category: "Project Management & Collaboration",
    description: "Coordinating development sprints and organizing task backlogs.",
    skills: [
      { name: "Jira", icon: <CheckSquare className="w-3.5 h-3.5" /> }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 15 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative BG Blur */}
      <div className="absolute left-[5%] bottom-[10%] w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold sm:text-4xl text-white mb-4 transition-colors duration-300">
            Technical <span className="text-gradient-emerald-blue">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-ocean-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 sm:text-sm font-sans transition-colors duration-300">
            A granular overview of my technical profile, showcasing domain specialties, programming competencies, and engineering tools.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SKILLS_DATA.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              variants={cardVariants}
              className={`glass-card p-6 sm:p-7 rounded-3xl border border-white/5 flex flex-col justify-between ${ groupIdx === 6 ? "md:col-span-2 md:max-w-xl md:mx-auto md:w-full lg:col-span-3" : "" }`}
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center gap-3.5 mb-3">
                  <h3 className="font-display font-bold text-slate-100 transition-colors duration-300">
                    {group.category}
                  </h3>
                </div>

                {/* Group description */}
                <p className="text-slate-400 mb-5 leading-relaxed transition-colors duration-300">
                  {group.description}
                </p>
              </div>

              {/* Skills Tags wrapper */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/60 hover:bg-white hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/30 hover:border-emerald-500/30 text-slate-300 font-sans font-medium hover:text-emerald-600 hover:text-emerald-400 transition-all cursor-default shadow-sm select-none"
                  >
                    <span className="text-emerald-400 opacity-80">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Banner */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-5 rounded-2xl glass border border-slate-800/80 shadow-md">
          <div className="flex items-center justify-center gap-2 text-emerald-400 font-semibold mb-2 transition-colors duration-300">
            <ShieldCheck className="w-5 h-5" />
            Core Security Guidelines
          </div>
          <p className="text-slate-400 leading-relaxed transition-colors duration-300">
            Network and cloud infrastructures are designed following the Principle of Least Privilege (PoLP), segmented network architecture, and defense-in-depth security practices.
          </p>
        </div>

      </div>
    </section>
  );
}
