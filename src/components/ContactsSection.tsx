import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:okedinachichosen@gmail.com",
    color: "#00BFFF",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "http://www.linkedin.com/in/chibundu-okedinachi",
    color: "#0077B5",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Chosen-Data26",
    color: "#A020F0",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-12 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, #00BFFF 1px, transparent 0)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-[#00BFFF]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-24 bg-linear-to-r from-[#00BFFF] to-[#A020F0] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss how data science can transform your business
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl py-6 px-4 sm:px-6 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white mb-2 font-medium"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white mb-2 font-medium"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="w-full rounded-md px-3 py-2 bg-white/5 border border-white/20 text-white placeholder:text-gray-500 focus:border-[#00BFFF] focus:ring-[#00BFFF] resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-linear-to-r from-[#00BFFF] to-[#A020F0] hover:from-[#00BFFF]/90 hover:to-[#A020F0]/90 text-white shadow-lg shadow-[#00BFFF]/20 cursor-pointer"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl py-6 px-4 sm:px-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always interested in new opportunities, collaborations, and
                interesting projects. Whether you have a question or just want
                to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00BFFF]/50 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-linear-to-br from-white/10 to-white/5 group-hover:from-[#00BFFF]/20 group-hover:to-[#A020F0]/20 transition-all">
                      <link.icon
                        className="w-6 h-6 text-white"
                        style={{ color: link.color }}
                      />
                    </div>
                    <div>
                      <div className="text-white font-medium">{link.name}</div>
                      <div className="hidden sm:block text-gray-400 text-sm">
                        {link.href
                          .replace("mailto:", "")
                          .replace("https://", "")}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:max-w-xl mx-auto mt-8 bg-linear-to-br from-[#00BFFF]/10 to-[#A020F0]/10 rounded-2xl py-6 px-4 sm:px-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white font-medium">
              Available for new projects
            </span>
          </div>
          <p className="text-base font-medium text-transparent bg-clip-text bg-linear-to-r from-[#00BFFF] to-[#A020F0]">
            Currently accepting freelance and contract work. Let's build
            something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
