import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Customer Churn Prediction",
    description:
      "Built a machine learning model to predict customer churn with 92% accuracy using ensemble methods and feature engineering.",
    image:
      "https://images.unsplash.com/photo-1763568258143-904ea924ac53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY29kZXxlbnwxfHx8fDE3NzI0MTU4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Machine Learning", "Python", "Scikit-learn"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sales Analytics Dashboard",
    description:
      "Developed an interactive Power BI dashboard for real-time sales tracking, resulting in 30% improvement in decision-making speed.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzfGVufDF8fHx8MTc3MjM2MzU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Data Visualization", "Power BI", "SQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Deep Learning Image Classifier",
    description:
      "Created a CNN-based image classification system achieving 95% accuracy on custom dataset using transfer learning techniques.",
    image:
      "https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGVlcCUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MjQ1NDUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Deep Learning", "TensorFlow", "CNN"],
    github: "#",
    demo: "#",
  },
  {
    title: "Time Series Forecasting",
    description:
      "Implemented ARIMA and LSTM models for stock price prediction with comprehensive statistical analysis and visualization.",
    image:
      "https://images.unsplash.com/photo-1585656297773-dcd8c7a7c2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVkaWN0aXZlJTIwbW9kZWxpbmclMjBzdGF0aXN0aWNzfGVufDF8fHx8MTc3MjQ1NDUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Time Series", "Predictive Modeling", "Python"],
    github: "#",
    demo: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #A020F0 1px, transparent 1px),
              linear-gradient(to bottom, #A020F0 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-[#00BFFF] to-[#A020F0] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing real-world applications of data science and machine
            learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#00BFFF]/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-linear-to-r from-[#00BFFF] to-[#A020F0] hover:from-[#00BFFF]/90 hover:to-[#A020F0]/90 text-white"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00BFFF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-white/5 text-[#00BFFF] border border-[#00BFFF]/30 hover:bg-[#00BFFF]/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#A020F0]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-[#00BFFF]/50 transition-all"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
