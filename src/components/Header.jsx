import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Habilidades", href: "#skills" },
    { name: "Experiência", href: "#experience" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-black text-white">
          M<span className="text-emerald-500">.</span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-emerald-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Menu com Efeito Glassmorphism */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-2xl border-b border-white/5 transition-all duration-300 ease-in-out overflow-hidden shadow-2xl ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Gradiente sutil no topo do dropdown para indicar profundidade */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-300 hover:text-emerald-500 hover:pl-2 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
