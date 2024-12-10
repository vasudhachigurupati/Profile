import React from 'react';
import { Code, Database, Brain, Users, Laptop, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code />,
      title: "Programming Languages",
      skills: ["Python", "Java", "HTML", "CSS", "JavaScript"]
    },
    {
      icon: <Brain />,
      title: "Machine Learning & AI",
      skills: ["Neural Networks", "Deep Learning", "Statistical Analysis", "NLP"]
    },
    {
      icon: <Database />,
      title: "Database & Visualization",
      skills: ["Power BI", "SQL", "TensorFlow", "PyTorch", "Tableau", "Looker Studio"]
    },
    {
      icon: <Users />,
      title: "Soft Skills",
      skills: ["Communication", "Team Work", "Collaboration", "Business Research"]
    },
    {
      icon: <Laptop />,
      title: "Development",
      skills: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      icon: <LineChart />,
      title: "Analytics",
      skills: ["Data Analysis", "Statistical Modeling", "Data Structures", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8"
        >
          Technical Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-purple-400">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-purple-900/30 hover:text-purple-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}