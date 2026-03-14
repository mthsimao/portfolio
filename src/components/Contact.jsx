import { Mail, Github, Linkedin, Instagram, ArrowRight } from "lucide-react";

function Contact() {
  const socialLinks = [
    {
      label: "Email",
      value: "mthsimaoo@gmail.com",
      href: "mailto:mthsimaoo@gmail.com",
      icon: <Mail size={20} />,
      color: "hover:border-emerald-500/50",
      text: "text-emerald-500",
    },
    {
      label: "Github",
      value: "@mthsimao",
      href: "https://github.com/mthsimao",
      icon: <Github size={20} />,
      color: "hover:border-zinc-400/50",
      text: "text-zinc-400",
    },
    {
      label: "Instagram",
      value: "@mthsimao",
      href: "https://instagram.com/mthsimao",
      icon: <Instagram size={20} />,
      color: "hover:border-pink-500/50",
      text: "text-pink-500",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-zinc-950 py-24 px-6 overflow-hidden"
    >
      {/* Background Decorativo */}
    

      <div className="container mx-auto max-w-[64rem] relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-16 text-center max-w-2xl">
            <span className="text-emerald-500 font-semibold tracking-widest uppercase text-xs">
              Disponibilidade
            </span>
            <h2 className="mt-4 mb-6 text-3xl md:text-4xl font-bold tracking-tight text-white">
              Vamos discutir seu próximo projeto?
            </h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mb-6" />
            <p className="text-zinc-400 text-lg leading-relaxed">
              Atualmente estou aberto a novas oportunidades e parcerias em
              projetos de desenvolvimento frontend.
            </p>
          </div>

          <div className="w-full bg-zinc-900/40 border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-row items-center gap-4 p-2 rounded-2xl border border-transparent ${link.color} bg-white/5 transition-all duration-300 hover:-translate-y-1`}
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-800 ${link.text} transition-transform group-hover:scale-110`}
                  >
                    {link.icon}
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                      {link.label}
                    </p>
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                      {link.value}
                    </span>
                  </div>

                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={16} className={link.text} />
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Final */}
            <div className="mt-16 text-center border-t border-white/5 pt-12">
              <p className="text-zinc-500 text-sm mb-4">
                Prefere uma conversa direta?
              </p>
              <a
                href="mailto:mthsimaoo@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                Enviar um Email agora
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
