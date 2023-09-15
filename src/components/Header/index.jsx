import { useState } from "react";
import Logo from "../../assets/logo.svg";
import Help from "../../assets/help.svg";
import Perfil from "../../assets/perfil.svg";

export default function Header({ user, onLogout }) {
  const buttonPerfil =
    "w-full bg-blue-100 py-3 hover:bg-blue-300";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white flex h-14 justify-between items-center px-16 mb-14 ">
      <img src={Logo} className="h-14" alt="Logo Dream Machine" />
      {user ? (
        <div
          className="relative flex items-center gap-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <img src={Perfil} className="h-12 cursor-pointer" alt={user.name} />
          <span className="font-bold">{user?.name}</span>
          {isMenuOpen && (
            <div className="absolute top-12 right-0 w-24 text-center shadow">
              <button  className={`${buttonPerfil} rounded-t-lg `} onClick={onLogout}>
                Deslogar
              </button>
              <button
                className={`${buttonPerfil} border-t-2 border-blue-400 rounded-b-lg `}
                onClick={() => setIsMenuOpen(false)}
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      ) : (
        <img src={Help} className="h-12" alt="Ajuda Geral" />
      )}
    </header>
  );
}
