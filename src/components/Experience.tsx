import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "INFISKILL Development",
      position: "Full Stack Development Internship",
      period: "December 2023 – May 2024",
      description: [
        "Developed key components of a web-based quiz application using React JS",
        "Implemented robust data fetching mechanisms to retrieve user information and quiz content",
        "Implemented admin dashboard functionality"
      ],
      tech: "MERN Stack"
    },
    {
      company: "INTEND CAREER",
      position: "Full Stack Development Internship",
      period: "May 2024 – Sep 2024",
      description: [
        "Developed responsive landing page for student e-commerce website using React.js",
        "Contributing to full stack development of student-focused e-commerce platform"
      ],
      tech: "MERN Stack"
    }
  ];

  return (
    <section id ="Experience" className="bg-black py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-purple-400" size={24} />
          <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                  <p className="text-purple-400">{exp.position}</p>
                </div>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="inline-block bg-purple-900/50 text-purple-400 px-3 py-1 rounded-full text-sm">
                {exp.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}