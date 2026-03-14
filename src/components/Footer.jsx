import { Github, Instagram, Linkedin, ArrowUp } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white tracking-tight">Matheus Simão</h2>
            <p className="text-sm text-zinc-500 mt-1 font-medium tracking-wide uppercase">Front-end Developer</p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={18} />, href: "https://github.com/mthsimao" },
              { icon: <Instagram size={18} />, href: "https://instagram.com/mthsimao" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-white/5 text-zinc-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright & Scroll Top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-xs text-zinc-600 font-medium">
              © {currentYear} Matheus Simão. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
            >
              Voltar ao topo <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;