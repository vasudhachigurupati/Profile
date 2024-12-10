import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Achievements() {
  const achievements = [
    "Achieved 4th rank in Avishkaar State wide student Innovation competition",
    "Shortlisted for National level Student innovation Competition presented by the Nudge Institute and Google and powered by Hack2skill"
  ];

  return (
    <section id="achievements" className="bg-black py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="text-purple-400" size={24} />
          <h2 className="text-2xl font-bold text-white">Achievements</h2>
        </div>
        <div className="grid gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all hover:transform hover:scale-[1.02]"
            >
              <p className="text-gray-300">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}