import htmlImg from "../assets/images/html.png";
import cssImg from "../assets/images/css-3.png";
import jsImg from "../assets/images/js.png";
import tailwindImg from "../assets/images/tailwindcss.png";
import reactImg from "../assets/images/react.svg";

function Skills() {
  return (
    <>
      <section
        id="skills"
        className="bg-b2 p-6 py-15 mt-30 md:mt-0 md:min-h-[75vh]"
      >
        <div className="container w-full mx-auto max-w-[64rem] ">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
              Habilidades Técnicas
            </h2>
            <p className="text-p1 text-xl">
              Um conjunto completo de ferramentas para construir web interfaces
              frontend poderosas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className=" bg-black/30 backdrop-blur-md border dark:border-white/10 hover:bg-black/80 hover:shadow-md rounded-2xl shadow-sm p-6 transition-all duration-300 h-full">
              <div className="flex flex-col gap-4.5 h-full">
                <div className="img text-primary">
                  <img src={htmlImg} className="w-10" />
                </div>
                <h2 className="text-lg font-medium ">HTML</h2>
                <p className="text-sm text-p1 mt-auto">
                  Uma estrutura bem organizada, sempre seguindo a semântica do
                  HTML, e sempre tento comentar para ajudar na manutenção caso
                  precise.
                </p>
              </div>
            </div>

            <div className=" bg-black/30 backdrop-blur-md border dark:border-white/10 hover:bg-black/80 hover:shadow-md rounded-2xl shadow-sm p-6 transition-all duration-300 h-full">
              <div className="flex flex-col gap-4.5 h-full">
                <div className="img text-primary">
                  <img src={cssImg} className="w-10" />
                </div>
                <h2 className="text-lg font-medium ">CSS</h2>
                <p className="text-sm text-p1 mt-auto">
                  A responsividade do website é fundamental para a experiência
                  do usuário, sempre usando media queries para manter a
                  qualidade, constância e a responsividade.
                </p>
              </div>
            </div>

            <div className=" bg-black/30 backdrop-blur-md border dark:border-white/10 hover:bg-black/80 hover:shadow-md rounded-2xl shadow-sm p-6 transition-all duration-300 h-full">
              <div className="flex flex-col gap-4.5 h-full">
                <div className="img text-primary">
                  <img src={jsImg} className="w-10" />
                </div>
                <h2 className="text-lg font-medium ">JavaScript</h2>
                <p className="text-sm text-p1 mt-auto">
                  Com JavaScript, posso dar ainda mais vida ao site, criando
                  animações e adicionando interatividade para que prenda a
                  atenção do usuário.
                </p>
              </div>
            </div>

            <div className=" bg-black/30 backdrop-blur-md border dark:border-white/10 hover:bg-black/80 hover:shadow-md rounded-2xl shadow-sm p-6 transition-all duration-300 h-full">
              <div className="flex flex-col gap-4.5 h-full">
                <div className="img text-primary">
                  <img src={tailwindImg} className="w-10" />
                </div>
                <h2 className="text-lg font-medium ">Tailwind CSS</h2>
                <p className="text-sm text-p1 mt-auto">
                  Nunca foi tão fácil estilzar uma página para ficar mais
                  chamativa e agradável ao usuário, uma ferramenta moderna que
                  pode dar uma cara totalmente diferente.
                </p>
              </div>
            </div>

            <div className=" bg-black/30 backdrop-blur-md border dark:border-white/10 hover:bg-black/80 hover:shadow-md rounded-2xl shadow-sm p-6 transition-all duration-300 h-full">
              <div className="flex flex-col gap-4.5 h-full">
                <div className="img text-primary">
                  <img src={reactImg} className="w-10" />
                </div>
                <h2 className="text-lg font-medium ">React</h2>
                <p className="text-sm text-p1 mt-auto">
                  Atualmente, estou cursando react para aprimorar meus
                  conhecimentos sobre essa biblicoteca, podendo assim melhorar
                  ainda mais os meus resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Skills;
