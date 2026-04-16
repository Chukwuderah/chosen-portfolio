import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Linkedin, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  // { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "http://www.linkedin.com/in/chibundu-okedinachi",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/Chosen-Data26", label: "GitHub" },
  { icon: Mail, href: "mailto:okedinachichosen@gmail.com", label: "Email" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-10">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              whileHover={{ scale: 1.05 }}
            >
              <code className="text-[#00BFFF] text-base font-medium">
                &lt; cho
              </code>
              <code className="text-[#A020F0] text-base font-medium">
                sen /&gt;
              </code>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-[#00BFFF] hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden"
          // style={{ top: "40px" }}
        >
          <div className="container mx-auto px-6 pb-6 pt-20">
            <div className="flex flex-col items-center gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-xl text-white hover:text-[#00BFFF] py-2 px-4 rounded-lg hover:bg-white/5 transition-all"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            {/* Social Links */}
            <div className="w-full flex items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 rounded-lg bg-white/5 text-gray-400 hover:text-[#00BFFF] hover:bg-white/10 border border-white/10 hover:border-[#00BFFF]/50 transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <p className="text-gray-400 text-center text-sm my-4">
              &copy; {currentYear} Chosen Okedinachi. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
