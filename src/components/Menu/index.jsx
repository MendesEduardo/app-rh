import NavMenu from "./NavMenu";

export default function Menu({ user }) {
  return (
    <section className="dream-machine-blocoMenu p-5 text-center h-[30rem]">
      <div className="flex gap-5">
        <NavMenu to="/dadoscadastrais">Dados Cadastrais</NavMenu>
        <NavMenu to="/pagamentos">Pagamentos</NavMenu>
        <NavMenu to="/marcadorponto">Marcado de Ponto</NavMenu>
        <NavMenu to="/beneficios">Benefícios </NavMenu>
      </div>
      <h2 className=" mt-16 p-16 text-3xl font-bold">
        Bem-Vindo(a) {user.name}!
      </h2>
    </section>
  );
}
