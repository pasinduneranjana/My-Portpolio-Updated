import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from "@emailjs/browser";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

// EmailJS Keys
const SERVICE_ID = "service_hd9zvz4";
const TEMPLATE_ID = "template_pigponb";
const PUBLIC_KEY = "Ju-X6RK5ZDeDz25sx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};

    if (!formData.name.trim())
      tempErrors.name = "Name is required";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim())
      tempErrors.subject = "Subject is required";

    if (!formData.message.trim())
      tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('sending');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,

          // Extra fields (same as old project)
          form_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      setStatus('success');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus('error');

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute left-[15%] top-[20%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[90px] -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Get In <span className="text-gradient-emerald-blue">Touch</span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-ocean-500 mx-auto rounded-full" />

          <p className="text-slate-400 mt-4 text-sm sm:text-base font-sans">
            Let's discuss network design challenges, cloud migration initiatives,
            or prospective internship roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">

          {/* Left Side */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            <h3 className="font-display font-bold text-xl text-slate-100 mb-2">
              Contact Information
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              I am open to discussions regarding junior cloud engineering
              positions, networking associate roles, or collaborative research.
              Reach out and I will reply within 24 hours.
            </p>

            <div className="flex flex-col gap-5">

              {/* Email */}
              <a
                href="mailto:pasinduner470@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl glass border border-slate-800 hover:border-emerald-500/20 transition-all group"
              >
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                    Email Address
                  </p>

                  <p className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                    pasinduner470@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pasindu-neranjana?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass border border-slate-800 hover:border-ocean-500/20 transition-all group"
              >
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-ocean-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                    LinkedIn
                  </p>

                  <p className="text-sm font-semibold text-slate-200 group-hover:text-ocean-400 transition-colors">
                    linkedin.com/in/pasindu-neranjana
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/pasinduneranjana"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass border border-slate-800 hover:border-purple-500/20 transition-all group"
              >
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-purple-400 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                    GitHub
                  </p>

                  <p className="text-sm font-semibold text-slate-200 group-hover:text-purple-400 transition-colors">
                    github.com/pasinduneranjana
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-white/5 shadow-2xl">

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-400">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`px-4 py-3 rounded-xl bg-slate-900 border text-slate-200 text-sm ${errors.name
                      ? 'border-red-500/50'
                      : 'border-slate-800'
                      }`}
                  />

                  {errors.name && (
                    <span className="text-[10px] text-red-500">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className={`px-4 py-3 rounded-xl bg-slate-900 border text-slate-200 text-sm ${errors.email
                      ? 'border-red-500/50'
                      : 'border-slate-800'
                      }`}
                  />

                  {errors.email && (
                    <span className="text-[10px] text-red-500">
                      {errors.email}
                    </span>
                  )}
                </div>

              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-400">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Inquiry about Junior Cloud Role"
                  className={`px-4 py-3 rounded-xl bg-slate-900 border text-slate-200 text-sm ${errors.subject
                    ? 'border-red-500/50'
                    : 'border-slate-800'
                    }`}
                />

                {errors.subject && (
                  <span className="text-[10px] text-red-500">
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-400">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hi Pasindu, I would love to connect..."
                  className={`px-4 py-3 rounded-xl bg-slate-900 border text-slate-200 text-sm resize-none ${errors.message
                    ? 'border-red-500/50'
                    : 'border-slate-800'
                    }`}
                />

                {errors.message && (
                  <span className="text-[10px] text-red-500">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold"
              >
                {status === 'sending' ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              <AnimatePresence>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}

              </AnimatePresence>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
