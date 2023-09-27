import { useState } from "react";
import MenuRotas from "../../components/MenuRotas";
import Identificacao from "../../components/dadoscadrastrais/Identificacao";
import Endereco from "../../components/dadoscadrastrais/Endereco";
import Documentacao from "../../components/dadoscadrastrais/Documentacao";
import Financeiro from "../../components/dadoscadrastrais/Financeiro";
import jsonData from "../../mocks/Dadoscadastrais/index.json";

export default function DadosCadastrais() {
  const [selectedObject, setSelectedObject] = useState("identificacao");

  const buttons = [
    { label: "Identificação", key: "identificacao" },
    { label: "Endereço", key: "endereco" },
    { label: "Documentação", key: "documentacao" },
    { label: "Financeiro", key: "fincanceiro" },
  ];

  const handleButtonClick = (objectName) => {
    setSelectedObject(objectName);
  };

  return (
    <section className="mb-20">
      <div className="dream-machine-blocoMenu p-5 text-center mb-5 h-16">
        <MenuRotas />
      </div>
      <div className="dream-machine-blocoMenu">
        <div className="flex gap-3 p-5 font-bold">
          {buttons.map((button) => (
            <button
              key={button.key}
              className={`dream-machine-buttonOpen ${
                selectedObject === button.key ? "bg-blue-600" : "bg-blue-300"
              }`}
              onClick={() => handleButtonClick(button.key)}
            >
              {button.label}
            </button>
          ))}
        </div>

        <div>
          {selectedObject === "identificacao" && (
            <Identificacao data={jsonData.identificacao} />
          )}
          {selectedObject === "endereco" && (
            <Endereco data={jsonData.endereco} />
          )}
          {selectedObject === "documentacao" && (
            <Documentacao data={jsonData.documentacao} />
          )}
          {selectedObject === "fincanceiro" && (
            <Financeiro data={jsonData.fincanceiro} />
          )}
        </div>
      </div>
    </section>
  );
}
