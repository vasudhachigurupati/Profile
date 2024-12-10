import React from 'react';
import { Code2, LineChart, Pizza } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Text Summarization",
      icon: <Code2 className="text-purple-400" size={24} />,
      description: "Implemented an advanced Hybrid text summarization system using state-of-the-art models.",
      technologies: ["Pegasus Model", "T5", "BART"],
      highlights: [
        "Achieved high-quality abstractive summaries on the samsum conversational dataset",
        "Implemented multiple model architectures for comparison",
        "Optimized for both accuracy and processing speed"
      ]
    },
    {
      title: "Revenue Insights of Hotel",
      icon: <LineChart className="text-purple-400" size={24} />,
      description: "Comprehensive Power BI dashboard for hospitality analytics showcasing key performance indicators.",
      technologies: ["Power BI", "DAX", "Data Modeling"],
      highlights: [
        "Visualized RevPAR, Revenue, Total Bookings, Occupancy, and ADR metrics",
        "Implemented comparative analysis for trend identification",
        "Created interactive filters for dynamic data exploration"
      ]
    },
    {
      title: "Pizza Sales Analysis",
      icon: <Pizza className="text-purple-400" size={24} />,
      description: "Data-driven analysis of pizza sales patterns and customer preferences.",
      technologies: ["SQL", "Power BI", "Excel"],
      highlights: [
        "Analyzed sales trends across different pizza categories",
        "Created visualizations for peak ordering times",
        "Generated actionable insights for inventory management"
      ]
    }
  ];

  return (
    <section id="projects" className="bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Featured Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                {project.icon}
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Highlights</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}