import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bars3Icon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import NavMenu from "../Menu/NavMenu";

export default function MenuRota() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const customStyle = "dream-machine-buttonOpen rounded-xl p-5 font-bold";
  const buttonOpcao =
    "bg-blue-500 absolute -top-3 text-white px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-600";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const voltaRota = () => {
    navigate(-1);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className={`${buttonOpcao} left-0`}>
        <Bars3Icon className="w-10" />
      </button>
      <button onClick={voltaRota} className={`${buttonOpcao} right-0`}>
        <ArrowLeftIcon className="w-10" />
      </button>

      {menuOpen && (
        <div className="absolute flex flex-col left-5 mt-10 bg-blue-100 text-center shadow-xl rounded-xl">
          <NavMenu customStyle={customStyle} to="/dadoscadastrais">
            Dados Cadastrais
          </NavMenu>
          <NavMenu customStyle={customStyle} to="/pagamentos">
            Pagamentos
          </NavMenu>
          <NavMenu customStyle={customStyle} to="/marcadorponto">
            Marcado de Ponto
          </NavMenu>
          <NavMenu customStyle={customStyle} to="/beneficios">
            Benefícios
          </NavMenu>
        </div>
      )}
    </div>
  );
}
