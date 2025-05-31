import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";

function Contact() {
  return (
    <section id="contact">
      <div className="bg-b2 p-4 md:p-10 ">
        <div className="flex flex-col justify-center items-center gap-8">

          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">Entre em contato</h2>
            <p className="text-p1 text-xl">Interresado em me contratar? Vamos discutir seu projeto.</p>
          </div>

          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-sm p-4 h-full">
           
            <h3 className="text-2xl mb-10 font-medium">Entre em contato</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-x-4 space-y-4 x5:space-x-15">

              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-p1/10 text-4th mr-4">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-p1 mb-1">Email</p>
                  <a
                    href="mailto:mthsimaoo@gmail.com"
                    className="text-p2 hover:text-5th transition-colors"
                  >
                    mthsimaoo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-p1/10 text-4th mr-4">
                  <Github />
                </div>
                <div>
                  <p className="text-sm text-p1 mb-1">Github</p>
                  <a
                    href="https://github.com/mthsimao"
                    target="_blank"
                    className="text-p2 hover:text-5th transition-colors"
                  >
                    @mthsimao
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-p1/10 text-4th mr-4">
                  <Linkedin />
                </div>
                <div>
                  <p className="text-sm text-p1 mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/matheus-sim%C3%A3o-74669022b/"
                    target="_blank"
                    className="text-p2 hover:text-5th transition-colors"
                  >
                    in/mthsimao
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-p1/10 text-4th mr-4">
                  <Instagram />
                </div>
                <div>
                  <p className="text-sm text-p1 mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/mthsimao"
                    target="_blank"
                    className="text-p2 hover:text-5th transition-colors"
                  >
                    @mthsimao
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
