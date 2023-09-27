
export default function Identificacao({ data }) {
  if (!data || data.length === 0) {
    return <div>Nenhum dado de identificação disponível.</div>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>Status: {item.status}</p>
          <p>Nome: {item.nome}</p>
          <p>Nome Social: {item.nomeSocial}</p>
          <p>Matrícula: {item.matricula}</p>
          <p>Email: {item.email}</p>
          <p>Nascimento: {item.nascimento}</p>
          <p>Sexo: {item.sexo}</p>
          <p>Estado Civil: {item.estadoCivil}</p>
          <p>Telefone 1: {item.telefone1}</p>
          <p>Telefone 2: {item.telefone2}</p>
          <p>Telefone 3: {item.telefone3}</p>
        </div>
      ))}
    </div>
  );
}
