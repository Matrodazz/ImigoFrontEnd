export default function Unidade({unidade}) {
    return (
        <div id="data-row" className="rounded bg-[#1E293B] p-8 flex items-center space-x-14 hover:bg-[#2c3e5a]">
      <ul className="flex space-x-14">
        <li>
          <div className="text-gray-300">Nome</div>
          {unidade.nome}
        </li>
        <li>
          <div className="text-gray-300">Contato</div>
          {unidade.email}
        </li>
        <li>
          <div className="text-gray-300">CNPJ</div>
          {unidade.cnpj_inscricao}
        </li>
        <li>
          <div className="text-gray-300">Endereço</div>
          {unidade.endereco.logradouro}, {unidade.endereco.numero}, {unidade.endereco.estado}
        </li>
       
      </ul>
    </div>
    )
}