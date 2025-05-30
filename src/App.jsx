import { ArrowRight } from "lucide-react";
import imageMe from "./assets/images/me.jpg";
import Header from "./components/Header"
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  
  return (
    <div>
      <Header />

      <main className="flex-grow pt-20 md:pt-0 bg-b1">
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center section overflow-hidden px-4 pt-[5rem] md:pt-0"
        >
          <div className="container w-full mx-auto max-w-[64rem]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="w-full md:w-7/12 space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#4169e12d] text-(--color-4th) text-sm font-medium mb-4">
                  <span>Desenvoledor Web Front-end</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
                  Matheus Simão
                </h1>

                <div className="text-2xl md:text-3xl font-medium tracking-tight">
                  <div>
                    <p>
                      Desenvolvendo Web interfaces poderosas e interativas para
                      o usuário
                    </p>
                  </div>
                </div>

                <p className="text-lg text-[#a7afbe] max-w-xl">
                  Me especializando em React.js para criar as interfaces. É
                  sempre um prazer transformar design em código.
                </p>

                <div className="pt-4">
                  <a
                    href="#skills"
                    className="inline-flex items-center gap-2 bg-[#4169e12d] px-6 py-4 rounded-3xl text-(--color-4th) font-medium transition-all hover:text-[#6a99ff] hover:scale-[1.08]"
                  >
                    Entre em contato <ArrowRight className="w-5 h-4" />
                  </a>
                </div>
              </div>

              <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                <div className="bg-white/50 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm p-1 w-72 h-72 rounded-full overflow-hidden">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                    <img
                      src={imageMe}
                      className="object-cover h-[300px] w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />

        <Experience />

        <Projects />
      </main>
    </div>
  );
}

export default App;
