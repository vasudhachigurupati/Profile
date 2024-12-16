import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="bg-black text-white py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          Sai Vasudha Chigurupati
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4 text-gray-300"
        >
          
          <a href="mailto:vasudha.chigurupatii@gmail.com" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Mail size={18} />
            vasudha.chigurupatii@gmail.com
          </a>
          <a href="https://linkedin.com/in/sai-vasudha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Linkedin size={18} />
            LinkedIn/in/sai-vasudha
          </a>
          <a href="https://github.com/vasudhachigurupati" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Github size={18} />
            vasudhachigurupati
          </a>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 mix-blend-overlay" />
    </header>
  );
}