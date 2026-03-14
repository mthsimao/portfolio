import feiraCeapImage from "../assets/images/feiraCeapImage.png";
import smartWallet from "../assets/images/smart-wallet.png";
import { Github } from "lucide-react";
import { Link } from "lucide-react";

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="relative bg-zinc-950 text-white py-24 px-6 overflow-hidden"
      >
        {/* Gradiente de fundo sutil para separar as seções */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        <div className="container mx-auto max-w-[72rem]">
          <div className="mb-16 max-w-2xl">
            <span className="text-emerald-500 font-semibold tracking-widest uppercase text-xs">
              Portfólio
            </span>
            <h2 className="mt-4 mb-6 text-3xl md:text-4xl font-bold tracking-tight">
              Projetos Recentes
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Uma seleção de aplicações onde combinei design focado no usuário e
              performance técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Projeto 1: Carteira Inteligente */}
            <div className="group flex flex-col">
              <a
                href="https://carteira-inteligente.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 transition-all duration-500 group-hover:border-emerald-500/30 group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)]"
              >
                {/* Overlay de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <img
                  src={smartWallet} // Aqui use a imagem do notebook que geramos
                  alt="Carteira Inteligente"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </a>

              <div className="mt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">
                      Planejador Financeiro Pessoal
                    </h3>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-400 border border-zinc-700">
                        React
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-400 border border-zinc-700">
                        Tailwind
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-400 border border-zinc-700">
                        TypeScript
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-400 border border-zinc-700">
                        IA
                      </span>
                    </div>
                  </div>
                  <span className="text-zinc-500 font-mono text-sm">2026</span>
                </div>
                <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
                  Dashboard intuitivo para controle de gastos com processamento
                  de linguagem natural e visualização dinâmica de dados
                  financeiros.
                </p>
              </div>
            </div>

            {/* Projeto 2: Mostra Científica */}
            <div className="group flex flex-col">
              <a
                href="https://ceap-feira.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <img
                  src={feiraCeapImage} // Aqui use a imagem do monitor que geramos
                  alt="Feira Ceap"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </a>

              <div className="mt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                      Mostra Científica CEAP
                    </h3>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-400 border border-zinc-700">
                        UI/UX
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-400 border border-zinc-700">
                        Responsive
                      </span>
                    </div>
                  </div>
                  <span className="text-zinc-500 font-mono text-sm">2024</span>
                </div>
                <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
                  Plataforma organizacional para mostrar o evento escolar,
                  centralizando cronogramas interativos e acervo de projetos
                  para visitantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
