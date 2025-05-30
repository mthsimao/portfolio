import blogLandingPageImg from "../assets/images/blog-landing-page.png";
import feiraCeapImage from "../assets/images/feiraCeapImage.png";

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-6 ml-auto mr-auto x5:w-[65vw] md:w-[85vw]">
          <div className="card bg-b3 rounded-2xl">
            <div className="img ">
              <img
                src={blogLandingPageImg}
                className="w-fit rounded-t-2xl"
                alt="Image of my project called Blog Landing Page"
              />
            </div>
            <div className=" flex flex-col gap-10 p-6">
              <div className="texts">
                <h2 className="text-2xl font-medium mb-4">Blog Landing Page</h2>
                <p className="text-sm text-p1">
                  Uma modesta landing page que eu fiz para aprender sobre
                  Tailwind CSS. Para tornar a página mais interativa, eu
                  utilizei o JavaScript, assim aprimorando ainda mais meus
                  conhecimentos sobre essa tecnologia.
                </p>
              </div>
              <div className="techs flex flex-row flex-wrap gap-2">
                <span className="bg-3th text-5th text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  HTML
                </span>
                <span className="bg-3th text-5th text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  CSS
                </span>
                <span className="bg-3th text-5th text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  JavaScript
                </span>
                <span className="bg-3th text-5th text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>

          <div className="card bg-b3 rounded-2xl ">
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
              <div className="techs flex flex-row flex-wrap gap-2">
                <span className="bg-3th text-5th text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  HTML
                </span>
                <span className="bg-3th text-5th text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  CSS
                </span>
                <span className="bg-3th text-5th text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  JavaScript
                </span>
              </div>
            </div>
          </div>

          <div className="card bg-b3 rounded-2xl ">
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
              <div className="techs flex flex-row flex-wrap gap-2">
                <span className="bg-3th text-5th text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  HTML
                </span>
                <span className="bg-3th text-5th text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  CSS
                </span>
                <span className="bg-3th text-5th text-xs font-medium text-center px-2 py-1 rounded-4xl">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
