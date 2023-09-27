
export default function Documentacao({ data }) {
  if (!data || data.length === 0) {
    return <div>Nenhum dado de documentação disponível.</div>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>Número do CT: {item.numeroCt}</p>
          <p>Série: {item.serie}</p>
          <p>UF do CT: {item.ufCt}</p>
          <p>Data de Emissão do CT: {item.dataEmissaoCt}</p>
          <p>Número do RG: {item.numeroRg}</p>
          <p>Órgão Emissor do RG: {item.orgaoEmissor}</p>
          <p>Data de Emissão do RG: {item.dataEmissao}</p>
          <p>UF do RG: {item.ufRg}</p>
          <p>CPF: {item.cpf}</p>
          <p>CNH: {item.cnh}</p>
          <p>PIS/PASEP: {item.pispasep}</p>
          <p>Admissão: {item.admissao}</p>
          <p>Nacionalidade: {item.nacionalidade}</p>
          <p>CBO: {item.cbo}</p>
          <p>Departamento: {item.depto}</p>
          <p>Setor: {item.setor}</p>
          <p>FI: {item.fi}</p>
        </div>
      ))}
    </div>
  );
}
