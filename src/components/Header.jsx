import { Menu } from "lucide-react";
import { X } from "lucide-react";

function Header() {
  function openMenu() {
    const menu = document.querySelector("#nav");
    const openIcon = document.querySelector("#openMenuIcon");
    const closeIcon = document.querySelector("#closeMenuIcon");

    const isMenuVisible = !menu.classList.contains("hidden");

    menu.classList.toggle("hidden");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");

    if (!isMenuVisible) {
      const handleOutsideClick = (event) => {
        if (!menu.contains(event.target) && !openIcon.contains(event.target)) {
          menu.classList.add("hidden");
          closeIcon.classList.add("hidden");
          openIcon.classList.remove("hidden");

          document.removeEventListener("click", handleOutsideClick);
        }
      };
      setTimeout(() => {
        // timeout para evitar fechar o menu imediatamente após abrir (por conta do próprio clique no botão)
        document.addEventListener("click", handleOutsideClick);
      }, 0);
    }
  }

  return (
    <div className="flex flex-col">
      <header className="fixed bg-black/90 md:bg-black/50 backdrop-blur-md transition-all hover:bg-black/80 hover:shadow-md top-0 left-0 right-0 w-full z-10 flex items-center justify-center">
        <div className="flex items-center justify-between w-[90%] px-4 py-4">
          <div className="title">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              <a href="#">M</a>
            </h1>
          </div>

          <div className="flex items-center gap-10 bg">
            <div className="menu hidden md:flex" id="nav">
              <nav className="w-full absolute bg-black/95 flex flex-col top-16 left-0 gap-6 p-10 border-t md:relative md:bg-transparent md:flex-row md:top-0 md:border-0 md:p-0">
                <a
                  href="#home"
                  className="nav-link active text-xl md:text-[.875rem] cursor-pointer"
                >
                  Início
                </a>
                <a
                  href="#skills"
                  className="nav-link text-xl md:text-[.875rem] cursor-pointer"
                >
                  Habilidades
                </a>
                <a
                  href="#experience"
                  className="nav-link text-xl md:text-[.875rem] cursor-pointer"
                >
                  Experiência
                </a>
                <a
                  href="#projects"
                  className="nav-link text-xl md:text-[.875rem] cursor-pointer"
                >
                  Projetos
                </a>
                <a
                  href="#contact"
                  className="nav-link text-xl md:text-[.875rem] cursor-pointer"
                >
                  Contato
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => openMenu()}
                className="md:hidden text-gray-800 dark:text-white hover:text-[#82AFFF] cursor-pointer"
              >
                <Menu className="w-6 h-6 " id="openMenuIcon" />
                <X className="w-6 h-6 hidden" id="closeMenuIcon" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
