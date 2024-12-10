/*import React, { useState } from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CaseStudies() {
  const [isOpen, setIsOpen] = useState(false);

  const caseStudy = {
    title: "Haldiram's: A Journey from Local Sweet Shop to Global Brand",
    sections: [
      {
        title: "Foundation",
        content: "Haldiram's began during pre-independence India, offering high-quality bhujia made from moth beans (pesalu). It stood apart by pricing bhujia at ₹5/kg when competitors sold it for ₹2/kg, emphasizing premium quality."
      },
      {
        title: "Branding Revolution",
        content: "Named its bhujia after \"Dongar Dev,\" a legendary figure, creating an image of a premium product, even though there was no actual connection to the king. This branding helped establish Haldiram's as a trustworthy name."
      },
      {
        title: "Key Contributors",
        content: [
          "Sivakisan Agarwal: Played a vital role in identifying new markets like Nagpur, which lacked a snacks culture. He used innovative methods, such as giving free kaju katli samples to build a customer base and introducing snacks like samosa, kachori, and South Indian dishes (idli, dosa).",
          "Manohar Agarwal: Revolutionized packaging in 1973 by introducing modern, hygienic packing techniques, a rarity in those times. His efforts increased brand awareness and helped expand to larger cities like Delhi."
        ]
      }
    ]
  };

  return (
    <section className="bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-black p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="text-purple-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Business Research Case Studies</h2>
            </div>
            <ChevronDown
              className={`text-purple-400 transition-transform ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            />
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">{caseStudy.title}</h3>
                <div className="space-y-6">
                  {caseStudy.sections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-black p-4 rounded-lg"
                    >
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">
                        {section.title}
                      </h4>
                      {Array.isArray(section.content) ? (
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          {section.content.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-300">{section.content}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}*/
/*import React, { useState } from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState<number | null>(null);

  const caseStudies = [
    {
      title: "Haldiram's: A Journey from Local Sweet Shop to Global Brand",
      sections: [
        {
          title: "Foundation",
          content: "Haldiram's began during pre-independence India, offering high-quality bhujia made from moth beans (pesalu). It stood apart by pricing bhujia at ₹5/kg when competitors sold it for ₹2/kg, emphasizing premium quality."
        },
        {
          title: "Branding Revolution",
          content: "Named its bhujia after \"Dongar Dev,\" a legendary figure, creating an image of a premium product, even though there was no actual connection to the king. This branding helped establish Haldiram's as a trustworthy name."
        },
        {
          title: "Key Contributors",
          content: [
            "Sivakisan Agarwal: Played a vital role in identifying new markets like Nagpur, which lacked a snacks culture. He used innovative methods, such as giving free kaju katli samples to build a customer base and introducing snacks like samosa, kachori, and South Indian dishes (idli, dosa).",
            "Manohar Agarwal: Revolutionized packaging in 1973 by introducing modern, hygienic packing techniques, a rarity in those times. His efforts increased brand awareness and helped expand to larger cities like Delhi."
          ]
        }
      ]
    },
    {
      title: "NVIDIA: From Graphics Pioneer to AI Powerhouse",
      sections: [
        {
          title: "Foundation",
          content: "Founded in 1993 by Jensen Huang, Chris Malachowsky, and Curtis Priem, NVIDIA revolutionized computer graphics with its focus on GPUs. The timing coincided with the rise of 3D graphics in entertainment."
        },
        {
          title: "Evolution & Innovation",
          content: "NVIDIA pioneered GPUs for gaming and professional graphics, later expanding into AI and high-performance computing. The introduction of CUDA in 2006 was a pivotal moment, enabling parallel computing capabilities."
        },
        {
          title: "Strategic Growth",
          content: [
            "Gaming Dominance: Partnerships with Microsoft and Sony established NVIDIA as a leader in gaming graphics.",
            "AI Leadership: Shifted focus to AI computing, becoming essential for machine learning and data centers.",
            "Manufacturing Strategy: Successful partnership with TSMC for chip production, focusing on design innovation."
          ]
        }
      ]
    }
  ];

  return (
    <section id="case-studies" className="bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-purple-400" size={24} />
          <h2 className="text-2xl font-bold text-white">Business Research Case Studies</h2>
        </div>
        <div className="space-y-4">
          {caseStudies.map((study, index) => (
            <motion.div key={index} className="bg-black rounded-lg overflow-hidden">
              <motion.div
                className="bg-black p-6 border border-gray-800 hover:border-purple-500 transition-colors cursor-pointer"
                onClick={() => setActiveCase(activeCase === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                  <ChevronDown
                    className={`text-purple-400 transition-transform ${
                      activeCase === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
              </motion.div>

              <AnimatePresence>
                {activeCase === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 border-t border-gray-800">
                      <div className="space-y-6">
                        {study.sections.map((section, sIndex) => (
                          <motion.div
                            key={sIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: sIndex * 0.2 }}
                            className="bg-gray-900 p-4 rounded-lg"
                          >
                            <h4 className="text-lg font-semibold text-purple-400 mb-2">
                              {section.title}
                            </h4>
                            {Array.isArray(section.content) ? (
                              <ul className="list-disc list-inside space-y-2 text-gray-300">
                                {section.content.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-gray-300">{section.content}</p>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}*/
import React, { useState } from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CaseStudies() {
  const [isOpen, setIsOpen] = useState(false); // Track the dropdown open/close state

  const caseStudies = [
    {
      title: "Haldiram's: A Journey from Local Sweet Shop to Global Brand",
      sections: [
        {
          title: "Foundation",
          content: "Haldiram's began during pre-independence India, offering high-quality bhujia made from moth beans (pesalu). It stood apart by pricing bhujia at ₹5/kg when competitors sold it for ₹2/kg, emphasizing premium quality."
        },
        {
          title: "Branding Revolution",
          content: "Named its bhujia after \"Dongar Dev,\" a legendary figure, creating an image of a premium product, even though there was no actual connection to the king. This branding helped establish Haldiram's as a trustworthy name."
        },
        {
          title: "Key Contributors",
          content: [
            "Sivakisan Agarwal: Played a vital role in identifying new markets like Nagpur, which lacked a snacks culture. He used innovative methods, such as giving free kaju katli samples to build a customer base and introducing snacks like samosa, kachori, and South Indian dishes (idli, dosa).",
            "Manohar Agarwal: Revolutionized packaging in 1973 by introducing modern, hygienic packing techniques, a rarity in those times. His efforts increased brand awareness and helped expand to larger cities like Delhi."
          ]
        }
      ]
    },
    {
      title: "NVIDIA: From Graphics Pioneer to AI Powerhouse",
      sections: [
        {
          title: "Foundation",
          content: "Founded in 1993 by Jensen Huang, Chris Malachowsky, and Curtis Priem, NVIDIA revolutionized computer graphics with its focus on GPUs. The timing coincided with the rise of 3D graphics in entertainment."
        },
        {
          title: "Evolution & Innovation",
          content: "NVIDIA pioneered GPUs for gaming and professional graphics, later expanding into AI and high-performance computing. The introduction of CUDA in 2006 was a pivotal moment, enabling parallel computing capabilities."
        },
        {
          title: "Strategic Growth",
          content: [
            "Gaming Dominance: Partnerships with Microsoft and Sony established NVIDIA as a leader in gaming graphics.",
            "AI Leadership: Shifted focus to AI computing, becoming essential for machine learning and data centers.",
            "Manufacturing Strategy: Successful partnership with TSMC for chip production, focusing on design innovation."
          ]
        }
      ]
    }
  ];

  return (
    <section id="case-studies" className="bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-black p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="text-purple-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Business Research Case Studies</h2>
            </div>
            <ChevronDown
              className={`text-purple-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
            />
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    className="bg-black rounded-lg overflow-hidden"
                  >
                    <div className="p-6 border border-gray-800">
                      <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                      <div className="space-y-6">
                        {study.sections.map((section, sIndex) => (
                          <motion.div
                            key={sIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: sIndex * 0.2 }}
                            className="bg-gray-900 p-4 rounded-lg"
                          >
                            <h4 className="text-lg font-semibold text-purple-400 mb-2">
                              {section.title}
                            </h4>
                            {Array.isArray(section.content) ? (
                              <ul className="list-disc list-inside space-y-2 text-gray-300">
                                {section.content.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-gray-300">{section.content}</p>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
