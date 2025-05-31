import blogLandingPageImg from "../assets/images/blog-landing-page.png";
import feiraCeapImage from "../assets/images/feiraCeapImage.png";
import gerenciadorTarefasImage from "../assets/images/gerenciadorTarefasImage.png";
import { Github } from "lucide-react";
import { Link } from "lucide-react";

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="bg-b2 min-h-screen text-white flex flex-col justify-center items-center pt-20 pb-20"
      >
        <div className="mb-16 text-center max-w-2xl mx-auto p-6">
          <h2 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
            Projetos Recentes
          </h2>
          <p className="text-p1 text-xl">
            Uma seleção dos meus trabalhos mais impactantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ml-auto mr-auto x5:w-[70vw] md:w-[85vw]">

          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-sm h-full ">
            <div className="img ">
              <img
                src={gerenciadorTarefasImage}
                className="w-fit rounded-t-2xl"
                alt="Image of my project called Blog Landing Page"
              />
            </div>
            <div className=" flex flex-col justify-between gap-10 p-6">
              <div className="texts">
                <h2 className="text-2xl font-medium mb-4">
                  Gerenciador de Tarefas
                </h2>
                <p className="text-sm text-p1">
                  Meu primeiro projeto que eu fiz quando estava estudando React.
                  Comecei fazendo esse projeto para começar a entender o que a
                  biblioteca do React é capaz de fazer utilizando components,
                  state, e mais.
                </p>
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                <span className="bg-p1/15 text-p1 text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  React
                </span>
                <span className="bg-p1/15 text-p1 text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  Tailwind CSS
                </span>
                <span className="bg-p1/15 text-p1 text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  JavaScript
                </span>
                <span className="bg-p1/15 text-p1 text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  HTML
                </span>
                <span className="bg-p1/15 text-p1 text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  CSS
                </span>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <div className="w-full">
                  <a
                    href="https://gerenciador-de-tarefas-ochre-gamma.vercel.app/"
                    target="_blank"
                    className="bg-p1/20 p-3 rounded-full text-4th text-sm text-center flex flex-row justify-center items-center gap-3 cursor-pointer transition-all font-medium hover:scale-[1.1] hover:bg-4th hover:text-black"
                  >
                    Ver projeto <Link className="w-4 h-4" />
                  </a>
                </div>

                <div className="w-full">
                  <a
                    href="https://github.com/mthsimao/gerenciador-de-tarefas"
                    target="_blank"
                    className="bg-p1/20 p-3 rounded-full text-4th text-sm text-center flex flex-row justify-center items-center gap-3 cursor-pointer transition-all font-medium hover:scale-[1.1] hover:bg-4th hover:text-black"
                  >
                    Ver repositório <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-sm h-full">
            <div className="img ">
              <img
                src={blogLandingPageImg}
                className="w-fit rounded-t-2xl"
                alt="Image of my project called Blog Landing Page"
              />
            </div>
            <div className=" flex flex-col justify-between gap-10 h-fit p-6">
              <div className="texts">
                <h2 className="text-2xl font-medium mb-4">Blog Landing Page</h2>
                <p className="text-sm text-p1">
                  Uma modesta landing page que eu fiz para aprender sobre
                  Tailwind CSS. Para tornar a página mais interativa, eu
                  utilizei o JavaScript, assim aprimorando ainda mais meus
                  conhecimentos sobre essa tecnologia.
                </p>
              </div>
              <div className="flex flex-row flex-wrap gap-2 ">
                <span className="bg-p1/15 text-p1 text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  Tailwind CSS
                </span>
                <span className="bg-p1/15 text-p1 text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  JavaScript
                </span>
                <span className="bg-p1/15 text-p1 text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  HTML
                </span>
                <span className="bg-p1/15 text-p1 text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  CSS
                </span>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <div className="w-full">
                  <a
                    href="https://blog-landing-page-phi.vercel.app/"
                    target="_blank"
                    className="bg-p1/20 p-3 rounded-full text-4th text-sm text-center flex flex-row justify-center items-center gap-3 cursor-pointer transition-all font-medium hover:scale-[1.1] hover:bg-4th hover:text-black"
                  >
                    Ver projeto <Link className="w-4 h-4" />
                  </a>
                </div>

                <div className="w-full">
                  <a
                    href="https://github.com/mthsimao/blog-landing-page"
                    target="_blank"
                    className="bg-p1/20 p-3 rounded-full text-4th text-sm text-center flex flex-row justify-center items-center gap-3 cursor-pointer transition-all font-medium hover:scale-[1.1] hover:bg-4th hover:text-black"
                  >
                    Ver repositório <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-sm h-full ">
            <div className="img ">
              <img
                src={feiraCeapImage}
                className="w-fit rounded-t-2xl"
                alt="Image of my project called Blog Landing Page"
              />
            </div>
            <div className=" flex flex-col gap-10 p-6">
              <div className="texts">
                <h2 className="text-2xl font-medium mb-4">Feira Ceap</h2>
                <p className="text-sm text-p1">
                  Com esse site que eu fiz para a feira de ciências da minha
                  antiga escola, consegui ir para a maior feira de ciência e
                  tecnologia do estado do Rio de Janeiro. Conseguindo o 2º lugar
                  de projeto popular na área de tecnologia.
                </p>
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                <span className="bg-p1/15 text-p1 text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  JavaScript
                </span>
                <span className="bg-p1/15 text-p1 text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  HTML
                </span>
                <span className="bg-p1/15 text-p1 text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  CSS
                </span>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <div className="w-full">
                  <a
                    href="https://gerenciador-de-tarefas-ochre-gamma.vercel.app/"
                    target="_blank"
                    className="bg-p1/20 p-3 rounded-full text-4th text-sm text-center flex flex-row justify-center items-center gap-3 cursor-pointer transition-all font-medium hover:scale-[1.1] hover:bg-4th hover:text-black"
                  >
                    Ver projeto <Link className="w-4 h-4" />
                  </a>
                </div>

                <div className="w-full">
                  <a
                    href="https://github.com/mthsimao/gerenciador-de-tarefas"
                    target="_blank"
                    className="bg-p1/20 p-3 rounded-full text-4th text-sm text-center flex flex-row justify-center items-center gap-3 cursor-pointer transition-all font-medium hover:scale-[1.1] hover:bg-4th hover:text-black"
                  >
                    Ver repositório <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
