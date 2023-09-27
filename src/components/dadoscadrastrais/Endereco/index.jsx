
export default function Endereco({ data }) {
  if (!data || data.length === 0) {
    return <div>Nenhum dado de endereço disponível.</div>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>CEP: {item.cep}</p>
          <p>Rua: {item.rua}</p>
          <p>Complemento: {item.complemento}</p>
          <p>Bairro: {item.bairro}</p>
          <p>Cidade: {item.cidade}</p>
          <p>Estado: {item.estado}</p>
          <p>País: {item.pais}</p>
        </div>
      ))}
    </div>
  );
}
