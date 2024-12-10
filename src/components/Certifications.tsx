import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    "Completed NPTEL's Python for Data Science course with a score of 76%",
    "Achieved proficiency in Python for Data Science and Machine Learning A-Z at Udemy",
    "Gained expertise in Data Science at Forge",
    "Achieved IBM Data Science professional certification on Coursera"
  ];

  return (
    <section id="certifications" className="bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Award className="text-purple-400" size={24} />
          <h2 className="text-2xl font-bold text-white">Certifications</h2>
        </div>
        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all hover:transform hover:scale-[1.02]"
            >
              <p className="text-gray-300">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}