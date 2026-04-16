import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "http://www.linkedin.com/in/chibundu-okedinachi",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/Chosen-Data26", label: "GitHub" },
    { icon: Mail, href: "mailto:okedinachichosen@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-left">
            <p>
              &copy; {currentYear} Chosen Okedinachi. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
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
        </div>
      </div>
    </footer>
  );
}
