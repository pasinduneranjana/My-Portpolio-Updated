import { motion } from 'framer-motion';
import { Github, ExternalLink, Network, CloudLightning, ShieldAlert, Cpu } from 'lucide-react';

const PROJECTS_DATA = [
  {
    title: "Enterprise Multi-Site Campus Network Design ",
    category: "Networking",
    icon: <Network className="w-6 h-6 text-emerald-400" />,
    desc: "Designed and simulated a fault-tolerant multi-site corporate network topology. Configured dynamic routing, network segmentation, firewalls, and redundant connections to support 500+ endpoints.",
    tech: ["Cisco IOS", "OSPF", "Inter-VLAN", "ASA Firewall", "VLANs", "GNS3"],
    github: "https://github.com/pasindu-naranjana/enterprise-campus-network",
    demo: "#"
  },
  {
    title: "Secure & Automated AWS Landing Zone",
    category: "Cloud Computing",
    icon: <CloudLightning className="w-6 h-6 text-ocean-400" />,
    desc: "Provisioned a multi-tier AWS virtual network using Infrastructure as Code. Deployed auto-scaled web hosts, private database subnets, and secure NAT gateways with robust IAM policies.",
    tech: ["AWS VPC", "Terraform", "EC2", "Auto Scaling", "Application Load Balancer", "IAM"],
    github: "https://github.com/pasindu-naranjana/aws-secure-landing-zone",
    demo: "#"
  },
  {
    title: "High-Availability Linux Web Cluster",
    category: "Systems Engineering",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    desc: "Architected a load-balanced Nginx web cluster on Ubuntu server instances. Integrated active health-checks, automated database replication, SSL encryption, and custom cron backup scripts.",
    tech: ["Linux (Ubuntu)", "Nginx Load Balancer", "MySQL Replication", "Bash Scripting", "SSL/TLS"],
    github: "https://github.com/pasindu-naranjana/ha-linux-web-cluster",
    demo: "#"
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 16 }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40 transition-colors duration-300">
      {/* Decorative gradient spot */}
      <div className="absolute right-[10%] bottom-[15%] w-[300px] h-[300px] bg-ocean-500/5 rounded-full blur-[90px] -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold sm:text-4xl text-white mb-4 transition-colors duration-300">
            Featured <span className="text-gradient-emerald-blue">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-ocean-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 sm:text-base font-sans transition-colors duration-300">
            A selection of academic simulations and cloud integrations focusing on high availability, security, and infrastructure automation.
          </p>
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card flex flex-col h-full rounded-3xl overflow-hidden border border-white/5 relative group"
            >
              {/* Colored Card Accent Top Line */}
              <div className="h-1 w-full bg-gradient-to-r from-emerald-500/80 to-ocean-500/80 opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Card Padding */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Header info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-md transition-colors duration-300">
                    {project.icon}
                  </div>
                  <span className="tracking-widest text-emerald-400 font-semibold uppercase px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold sm:text-xl text-slate-100 group-hover:text-emerald-500 group-hover:text-emerald-400 transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="sm:text-sm text-slate-400 leading-relaxed mb-6 flex-grow transition-colors duration-300">
                  {project.desc}
                </p>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="font-sans font-medium text-slate-300 px-2 py-0.5 rounded bg-slate-800/40 border border-slate-800 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-slate-800/60 transition-colors duration-300">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-slate-400 hover:text-emerald-600 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Codebase
                  </a>
                  {project.demo !== '#' && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-ocean-400 hover:text-ocean-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Projects Button */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://github.com/pasinduneranjana"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl glass border border-slate-700 hover:border-purple-500/50 hover:bg-purple-500/10 text-slate-200 hover:text-white font-sans font-semibold transition-all duration-300 hover:-translate-y-0.5 group shadow-lg"
          >
            <Github className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
            View All Projects on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}
