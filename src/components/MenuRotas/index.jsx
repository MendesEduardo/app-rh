import { useNavigate, useLocation } from "react-router-dom";
import { Bars3Icon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import NavMenu from "../Menu/NavMenu";
import { useState } from "react";

export default function MenuRota() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const customStyle = "dream-machine-buttonOpen p-5 font-bold";
  const buttonOpcao =
    "bg-blue-600 absolute -top-3 text-white px-2 py-1 rounded hover:bg-blue-800";

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
        <div className="absolute left-5 mt-10 bg-blue-600 text-center shadow-2xl border-2 rounded-xl">
          <ul className="flex flex-col gap-1 bg-white p-2 rounded-lg">
            <li
              className={
                location.pathname === "/dadoscadastrais"
                  ? "hidden"
                  : customStyle
              }
            >
              <NavMenu customStyle={customStyle} to="/dadoscadastrais">
                Dados Cadastrais
              </NavMenu>
            </li>
            <li
              className={
                location.pathname === "/pagamentos" ? "hidden" : customStyle
              }
            >
              <NavMenu customStyle={customStyle} to="/pagamentos">
                Pagamentos
              </NavMenu>
            </li>
            <li
              className={
                location.pathname === "/marcadorponto" ? "hidden" : customStyle
              }
            >
              <NavMenu customStyle={customStyle} to="/marcadorponto">
                Marcado de Ponto
              </NavMenu>
            </li>
            <li
              className={
                location.pathname === "/beneficios" ? "hidden" : customStyle
              }
            >
              <NavMenu customStyle={customStyle} to="/beneficios">
                Benefícios
              </NavMenu>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
