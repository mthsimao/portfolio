import { Github } from "lucide-react";
import { Mail } from "lucide-react";
import { Instagram } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="bg-b1 mt-15 border-t  border-white/10 ">
        <div className=" py-15 px-8 flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center">
          <div className="name text-center md:text-left">
            <h2 className="text-lg font-medium">Matheus Simão</h2>
            <p className="text-sm text-p1">Front end Developer</p>
          </div>

          <div className="socials flex flex-row justify-center">
            <div className="github">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-p1/10 text-4th mr-4 hover:bg-4th hover:text-b1 transition-colors cursor-pointer">
                <a href="https://github.com/mthsimao" target="_blank">
                  <Github />
                </a>
              </div>
            </div>

            <div className="email">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-p1/10 text-4th mr-4 hover:bg-4th hover:text-b1 transition-colors cursor-pointer">
                <a href="mailto:mthsimaoo@gmail.com" target="_blank">
                  <Mail />
                </a>
              </div>
            </div>

            <div className="instagram">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-p1/10 text-4th mr-4 hover:bg-4th hover:text-b1 transition-colors cursor-pointer">
                <a href="https://instagram.com/mthsimao" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p class="text-sm text-muted-foreground">
              © 2025 Matheus Simão. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
