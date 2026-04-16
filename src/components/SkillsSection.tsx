import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Brain,
  LineChart,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", level: 95 },
      { name: "R", level: 85 },
      { name: "SQL", level: 90 },
      // { name: "JavaScript", level: 75 },
    ],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: [
      { name: "Scikit-learn", level: 92 },
      { name: "TensorFlow", level: 8 },
      { name: "PyTorch", level: 15 },
      { name: "Keras", level: 5 },
    ],
  },
  {
    title: "Data Visualization",
    icon: LineChart,
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 85 },
      { name: "Matplotlib", level: 92 },
      { name: "Seaborn", level: 90 },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    skills: [
      // { name: "AWS", level: 82 },
      // { name: "Docker", level: 80 },
      { name: "Streamlit", level: 88 },
      { name: "Git", level: 90 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 bg-linear-to-b from-[#0A0A0A] to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00BFFF] rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-64 h-64 bg-[#A020F0] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Skills & Tools</h2>
          <div className="h-1 w-24 bg-linear-to-r from-[#00BFFF] to-[#A020F0] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for data science and machine learning
            projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#00BFFF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00BFFF]/10"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-linear-to-br from-[#00BFFF]/20 to-[#A020F0]/20 rounded-lg">
                  <category.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-[#00BFFF] text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-linear-to-r from-[#00BFFF] to-[#A020F0] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional stats or certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
        >
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "12+", label: "Tools Mastered" },
            { number: "2+", label: "Years Experience" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-linear-to-br from-white/5 to-white/0 border border-white/10"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#00BFFF] to-[#A020F0] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
