import login from "../../assets/login.svg";
import { useState } from "react";

export default function Login({ onSubmit }) {
  const [senhaErrada, setsenhaErrada] = useState("");
  const [SeSenhaForErrada, setSeSenhaForErrada] = useState(false);

  const safeSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const name = e.target[0].value;
    const senha = e.target[1].value;

    if (senha === "22") {
      onSubmit({ name, senha });
      setsenhaErrada("");
      setSeSenhaForErrada(false);
    } else {
      setsenhaErrada(" incorreta");
      setSeSenhaForErrada(true);
    }
  };

  return (
    <form onSubmit={safeSubmit} className="dream-machine-blocoMenu">
      <div className="flex flex-wrap justify-around p-5">
        <img src={login} className=" h-[20rem]" alt="binchinhos de pelucia" />
        <div className="bg-blue-100 w-[30rem] rounded-2xl py-14">
          <label className="p-5 font-bold" htmlFor="nome">
            Nome
          </label>
          <input
            type="text"
            className="dream-machine-input mb-2"
            id="nome"
            required
            placeholder="Nome"
          />
          <label
            className={`p-5 font-bold ${
              SeSenhaForErrada ? "text-red-500" : ""
            }`}
            htmlFor="senha"
          >
            Senha {senhaErrada && <span>{senhaErrada}</span>}
          </label>
          <input
            type="password"
            className={`dream-machine-input ${
              SeSenhaForErrada
                ? "border-2 border-red-500 focus:border-blue-500"
                : ""
            }`}
            id="senha"
            required
            placeholder="Senha"
          />

          <div className="flex justify-center gap-10 mt-4 font-bold">
            <button type="button" className="hover:text-blue-600 underline">
              Esqueceu Senha
            </button>
            <button type="button" className="hover:text-blue-600 underline">
              Cadastro
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="dream-machine-button">
          Login
        </button>
      </div>
    </form>
  );
}
