"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ashrafulrahat34@gmail.com",
      href: "mailto:ashrafulrahat34@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1867559512",
      href: "tel:+8801867559512",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Shewrapara, Dhaka, Bangladesh",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/yourusername",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Static Background Effects - No Movement */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mb-8"
          />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
            Get In Touch
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Let&apos;s discuss your project and bring your ideas to life.
            I&apos;m always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-light mb-8 text-white">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-black text-white border border-white/20 rounded-full font-medium text-base hover:bg-white hover:text-black transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <motion.div className="group-hover:translate-x-1 transition-transform duration-300">
                      <Send size={18} />
                    </motion.div>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                  >
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-green-400 text-sm">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                  >
                    <AlertCircle className="text-red-400" size={20} />
                    <span className="text-red-400 text-sm">
                      Failed to send message. Please try again or email me
                      directly.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-white mb-6">
                Contact Information
              </h3>

              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-medium">
                      {item.label}
                    </p>
                    <p className="text-white font-light">{item.value}</p>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-gray-500 group-hover:text-white transition-colors"
                  />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-light text-white mb-6">Follow Me</h3>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 bg-gray-900/50 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:border-gray-700 hover:bg-gray-800/50`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
