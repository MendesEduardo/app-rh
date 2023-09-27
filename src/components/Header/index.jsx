import { useState } from "react";
import NavMenu from "../Menu/NavMenu";
import Logo from "../../assets/logo.svg";
import Help from "../../assets/help.svg";
import Perfil from "../../assets/perfil.svg";

export default function Header({ user, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white flex h-14 justify-between items-center px-16 mb-8 ">
      <NavMenu to="/" customStyle="cursor-pointer">
        <img src={Logo} className="h-14" alt="Logo Dream Machine" />
      </NavMenu>
      {user ? (
        <div
          className="relative flex items-center gap-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <img src={Perfil} className="h-12 cursor-pointer" alt={user.name} />
          <span className="font-bold">{user?.name}</span>
          {isMenuOpen && (
            <div className="absolute top-12 right-0 w-28 border text-center shadow-lg rounded-lg">
              <div className="bg-white p-2 rounded-lg flex flex-col gap-1 font-bold">
                <button className="dream-machine-buttonOpen" onClick={onLogout}>
                  Deslogar
                </button>
                <button
                  className=" dream-machine-buttonOpen"
                >
                  Help
                </button>{" "}
                <button
                  className=" dream-machine-buttonOpen"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <img src={Help} className="h-12" alt="Ajuda Geral" />
      )}
    </header>
  );
}
