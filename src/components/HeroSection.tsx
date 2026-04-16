import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1759771963975-8a4885446f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhcmslMjBibHVlJTIwcHVycGxlJTIwbmV0d29ya3xlbnwxfHx8fDE3NzI0NTQ1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")',
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/90" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #00BFFF 1px, transparent 1px),
            linear-gradient(to bottom, #00BFFF 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-[#00BFFF] text-xl tracking-widest uppercase font-light">
              Data Scientist
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-semibold text-white mb-4 tracking-tight uppercase"
          >
            chosen okedinachi
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 w-64 bg-linear-to-r from-[#00BFFF] to-[#A020F0] mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
          >
            Transforming data into actionable insights through machine learning
            and advanced analytics
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-linear-to-r from-[#00BFFF] to-[#A020F0] hover:from-[#00BFFF]/90 hover:to-[#A020F0]/90 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#00BFFF]/20 hover:shadow-xl hover:shadow-[#00BFFF]/30 transition-all duration-300 cursor-pointer"
            >
              Explore My Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown className="w-8 h-8 text-[#00BFFF]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
