
export default function Financeiro({ data }) {
  if (!data || data.length === 0) {
    return <div>Nenhum dado financeiro disponível.</div>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>Salário: {item.salario}</p>
          <p>Tipo: {item.tipo}</p>
          <p>Carga Horária: {item.cargaHoraria}</p>
          <p>Horário: {item.horario}</p>
          <p>Turno: {item.turno}</p>
          <p>Periculosidade: {item.periculosidade}</p>
          <p>VR: {item.vr}</p>
          <p>VT: {item.vt}</p>
          <p>Médico: {item.medico}</p>
          <p>Dias: {item.dias}</p>
          <p>VT por Dia: {item.vtPorDia}</p>
          <p>Odontológico: {item.Odontologico}</p>
        </div>
      ))}
    </div>
  );
}
