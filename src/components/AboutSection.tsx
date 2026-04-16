import { motion } from "framer-motion";
import { Code2, Database, TrendingUp, Brain } from "lucide-react";
import { useEffect, useState } from "react";

const skills = [
  { name: "Python", icon: Code2, color: "#00BFFF" },
  { name: "Machine Learning", icon: Brain, color: "#A020F0" },
  { name: "SQL", icon: Database, color: "#00BFFF" },
  { name: "Data Analysis", icon: TrendingUp, color: "#A020F0" },
];

export function AboutSection() {
  const [mobile, setMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile !== mobile) {
        setMobile(isMobile);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobile]);

  return (
    <section id="about" className="py-12 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00BFFF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A020F0]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-24 bg-linear-to-r from-[#00BFFF] to-[#A020F0] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-[#00BFFF]/10 border border-[#00BFFF]/20">
              <img
                src={mobile ? "/site-stats.gif" : "/research-paper.gif"}
                alt="Data Scientist"
                className="w-full h-fit"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#00BFFF]/20 to-[#A020F0]/20 mix-blend-overlay" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-[#00BFFF] rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-[#A020F0] rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Data Scientist & Machine Learning Enthusiast
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a data scientist focused on building predictive systems
              that help people make better decisions with data.
              <span className=" block mt-2">
                My work sits at the intersection of machine learning, analytics,
                and decision intelligence, transforming raw data into tools that
                can forecast outcomes, identify risks, and support smarter
                strategies. Rather than stopping at analysis, I focus on
                developing end-to-end solutions: from data exploration and
                feature engineering to model development and interactive
                applications.
              </span>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I work primarily with{" "}
              <strong>
                Python, pandas, scikit-learn, and modern data tools
              </strong>{" "}
              to design predictive models and analytical systems that address
              real-world problems. My projects often involve building models
              that estimate probabilities, rank alternatives, and surface
              insights that organizations can act on.
              <span className="block mt-2">
                Beyond modeling, I believe that data science is only valuable
                when insights are clearly communicated and usable. Because of
                this, I place strong emphasis on documentation, explainability,
                and building interfaces that allow non-technical users to
                interact with data-driven systems.
              </span>
            </p>

            {/* Skills badges */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-white mb-4">
                Core Competencies
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#00BFFF]/50 transition-colors"
                  >
                    <skill.icon
                      className="w-6 h-6"
                      style={{ color: skill.color }}
                    />
                    <span className="text-white font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
