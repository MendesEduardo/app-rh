export default function Menu({ user }) {
  const opcao = "w-full h-16 font-bold bg-blue-100 rounded-xl py-5 cursor-pointer hover:bg-blue-300 ";
  return (
    <section className="dream-machine-blocoMenu p-5 text-center h-[26rem]">
      <div className="flex gap-5">
        <div className={opcao}>Dados Cadastrais</div>
        <div className={opcao}>Pagamentos</div>
        <div className={opcao}>Marcado de Ponto</div>
        <div className={opcao}>Benefícios </div>
      </div>
      <h2 className=" mt-16 p-16 text-3xl font-bold">Bem-Vindo(a) {user.name}!</h2>
    </section>
  );
}
