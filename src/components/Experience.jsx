function Experience() {
  return (
    <>
      <section
        id="experience"
        className="bg-b3 pt-30 pb-30 w-full p-4"
      >
        <div className="container w-full mx-auto max-w-[64rem] ">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
              Experiência Profisional
            </h2>
            <p className="text-p1 text-xl">
              Minha trajetória construindo interfaces frontend.
            </p>
          </div>

          <div className="content flex justify-center">
            <div className=" bg-black/30 backdrop-blur-md border dark:border-white/10 hover:bg-black/60 hover:shadow-md rounded-2xl shadow-sm p-6 transition-all duration-300 h-full max-w-[512px]">
              <div className="flex flex-col gap-4.5 h-full">
                <div className="img text-primary">
                  <h3 className="text-xl font-medium mb-2">Estágiario</h3>
                  <p className="text-4th mb-2">Attittud Boutique</p>
                  <p className="text-p1 mb-2">Out/2024 - Jan/2025</p>
                  <br />
                  <p>
                    Desenvolvimento de web interfaces responsivas utilizando HTML, CSS e JavaScript.
                  </p>
                  <br />
                  <p>
                    Auxílio no desenvolvimento e design de interfaces para
                    campanhas de vendas de roupa e marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
