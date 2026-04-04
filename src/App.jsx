import { ArrowRight, Sparkles } from "lucide-react";
import imageMe from "./assets/images/me.png";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-zinc-950 text-white selection:bg-emerald-500/30">
      <Header />

      <main className="grow pt-20 md:pt-0">
        <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 md:pt-0"
        >
          {/* Elementos Decorativos de Fundo */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

          <div className="container w-full mx-auto max-w-6xl relative z-1">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
              
              {/* Texto Principal */}
              <div className="w-full md:w-7/12 space-y-8 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest animate-fade-in">
                  <Sparkles size={14} />
                  <span>Desenvolvedor Web Front-end</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                    Matheus <span className="text-emerald-500">Simão</span>
                  </h1>
                  <h2 className="text-2xl md:text-4xl font-bold text-zinc-300 tracking-tight leading-tight">
                    Desenvolvendo interfaces poderosas e experiências memoráveis.
                  </h2>
                </div>

                <p className="text-lg text-zinc-400 max-w-xl leading-relaxed mx-auto md:mx-0">
                  Me especializando em React.js para transformar conceitos complexos em 
                  código limpo, performático e visualmente impecável.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black px-6 py-2 rounded-full font-bold transition-all hover:bg-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-95"
                  >
                    Vamos conversar <ArrowRight size={20} />
                  </a>
                  <a
                    href="#projects"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-zinc-900 border border-white/10 px-6 py-2 rounded-full font-bold text-white transition-all hover:bg-white/5 active:scale-95"
                  >
                    Ver Projetos
                  </a>
                </div>
              </div>

              {/* Foto de Perfil */}
              <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                <div className="relative group">
                  {/* Moldura Animada */}
                  <div className="absolute -inset-1 bg-linear-to-tr from-emerald-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                  
                  <div className="relative bg-zinc-900 p-2 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/10">
                    <div className="w-full h-full rounded-full overflow-hidden transition-all duration-700 ease-in-out">
                      <img
                        src={imageMe}
                        alt="Matheus Simão"
                        className="object-cover h-full w-full transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;