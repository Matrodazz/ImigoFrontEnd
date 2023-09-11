import { format } from "date-fns";

export default function Suporte({ suporte }) {
  // Descricao curta
  const descricaoCurta = suporte.descricao.substring(0, 25);

  // Formatador de data
  const dataVisitaFormatada = format(new Date(suporte.data_visita), "dd/MM/yyyy HH:mm:ss");

  return (
    <div id="data-row" className="rounded bg-[#1E293B] p-8 flex items-center space-x-14 hover:bg-[#2c3e5a]">
      <ul className="flex space-x-14">
        <li>
          <div className="text-gray-300">ID</div>
          {suporte.id}
        </li>
        <li>
          <div className="text-gray-300">Título</div>
          {suporte.titulo}
        </li>
        <li>
          <div className="text-gray-300">Descrição</div>
          {descricaoCurta}...
        </li>
        <li>
          <div className="text-gray-300">Fabricante</div>
          {suporte.fabricante}
        </li>
        <li>
          <div className="text-gray-300">Ass. Técnica</div>
          {suporte.assistenciatecnica}
        </li>
        <li>
          <div className="text-gray-300">Data de Visita</div>
          {dataVisitaFormatada}
        </li>
      </ul>
    </div>
  );
}
