import htmlImg from "../assets/images/html.png";
import cssImg from "../assets/images/css-3.png";
import jsImg from "../assets/images/js.png";
import tailwindImg from "../assets/images/tailwindcss.png";
import reactImg from "../assets/images/react.svg";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      img: htmlImg,
      color: "hover:border-orange-500/50",
      desc: "Estruturação semântica avançada com foco em SEO e acessibilidade (A11y).",
    },
    {
      name: "CSS3",
      img: cssImg,
      color: "hover:border-blue-500/50",
      desc: "Estilização modular com foco em layouts responsivos (Mobile First) e animações fluidas.",
    },
    {
      name: "JavaScript",
      img: jsImg,
      color: "hover:border-yellow-500/50",
      desc: "Manipulação de DOM, consumo de APIs e lógica de programação assíncrona (ES6+).",
    },
    {
      name: "Tailwind CSS",
      img: tailwindImg,
      color: "hover:border-cyan-500/50",
      desc: "Desenvolvimento rápido de UI com design system utilitário e alta performance de renderização.",
    },
    {
      name: "React",
      img: reactImg,
      color: "hover:border-sky-500/50",
      desc: "Criação de interfaces baseadas em componentes reutilizáveis, hooks e gerenciamento de estado.",
    },
  ];

  return (
    <>
      <section
        id="skills"
        className="relative bg-zinc-900/30 p-6 py-24 md:min-h-[80vh] overflow-hidden"
      >
        {/* Gradiente de fundo sutil para dar profundidade */}
        <div className="relative top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="container w-full mx-auto max-w-[64rem] relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-emerald-500 font-semibold tracking-widest uppercase text-xs">
              Stack Tecnológica
            </span>
            <h2 className="mt-4 mb-6 text-3xl md:text-4xl font-bold tracking-tight text-white">
              Habilidades Técnicas
            </h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mb-6" />
            <p className="text-zinc-400 text-lg leading-relaxed">
              Especializado na construção de interfaces modernas, escaláveis e
              focadas na experiência do usuário final.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group backdrop-blur-md border border-white/5 ${skill.color} rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="flex flex-col gap-5 h-full">
                  <div className="relative">
                    <div className="absolute bg-white/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={skill.img}
                      className="w-12 h-12 relative z-10 transition-all duration-500 object-contain"
                      alt={skill.name}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Skills;
