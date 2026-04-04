function Experience() {
  return (
    <>
      <section id="experience" className="bg-zinc-900/20 pt-30 pb-30 w-full p-4">
        <div className="container w-full mx-auto max-w-[64rem] ">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
              Experiência Profisional
            </h2>
            <p className="text-p1 text-xl">
              Minha trajetória construindo interfaces frontend.
            </p>
          </div>

          <div className="content flex flex-wrap justify-center gap-6 p-4">
            {/* Card Experiência 1 */}
            <div className="group relative bg-zinc-900/30 backdrop-blur-xl border border-white/5 hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-500 w-full max-w-[512px] overflow-hidden">
              {/* Efeito de brilho no hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      Estagiário de Atendimento
                    </h3>
                    <p className="text-zinc-400 font-medium tracking-wide uppercase text-sm mt-1">
                      INSS
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gray-500/10 text-gray-400 text-xs font-bold uppercase tracking-widest border border-gray-500/20">
                    Atual
                  </span>
                </div>

                <ul className="space-y-4 text-zinc-300">
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-blue-500 mt-1.5 shrink-0">●</span>
                    <span>
                      Atendimento especializado e orientação consultiva sobre
                      serviços previdenciários.
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-blue-500 mt-1.5 shrink-0">●</span>
                    <span>
                      Gestão e monitoramento de processos administrativos via
                      sistemas internos complexos.
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-blue-500 mt-1.5 shrink-0">●</span>
                    <span>
                      Suporte técnico e troubleshooting de hardware e
                      software para a equipe local.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Experiência 2 */}
            <div className="group relative bg-zinc-900/30 backdrop-blur-xl border border-white/5 hover:border-yellow-500/50 rounded-2xl p-8 transition-all duration-500 w-full max-w-[512px] overflow-hidden">
              <div className="absolute -inset-px bg-gradient-to-r from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      Web Master
                    </h3>
                    <p className="text-zinc-400 font-medium tracking-wide uppercase text-sm mt-1">
                      Attitud Boutique
                    </p>
                  </div>
                  <span className="text-zinc-500 text-xs font-medium whitespace-nowrap">
                    Out 2024 — Jan 2025
                  </span>
                </div>

                <ul className="space-y-4 text-zinc-300">
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-yellow-500 mt-1.5 shrink-0">●</span>
                    <span>
                      Desenvolvimento de interfaces modernas utilizando HTML5,
                      CSS3 e JavaScript.
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-yellow-500 mt-1.5 shrink-0">●</span>
                    <span>
                      Otimização e manutenção contínua da performance e UI das
                      páginas institucionais.
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-yellow-500 mt-1.5 shrink-0">●</span>
                    <span>
                      Resolução de problemas de infraestrutura de TI e suporte a
                      sistemas internos.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
