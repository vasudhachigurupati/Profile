import React from 'react';
import { Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Target className="text-purple-400" size={24} />
          <h2 className="text-2xl font-bold text-white">Career Objective</h2>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Motivated self-starter looking to bring my blend of technical proficiency to a role that fosters continuous learning and innovation. 
          Seeking to combine my practical development experience, market trend knowledge, and collaborative nature to contribute meaningfully 
          to a company's technological initiatives and growth strategies.
        </p>
      </div>
    </section>
  );
}