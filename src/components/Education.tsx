import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Vasireddy Venkatadri Institute of Technology",
      period: "2021 – 2025",
      score: "CGPA: 8.2"
    },
    {
      degree: "Board of Intermediate Education",
      institution: "Sri Akshara Junior College",
      period: "2019 – 2021",
      score: "Percentage: 95"
    },
    {
      degree: "Board of Secondary Education",
      institution: "Sri Chaitanya School",
      period: "2018 – 2019",
      score: "GPA: 9.5"
    }
  ];

  return (
    <section id="education" className="bg-black py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="text-purple-400" size={24} />
          <h2 className="text-2xl font-bold text-white">Education</h2>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institution}</p>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-purple-400">{edu.period}</span>
                <span className="text-green-400">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}