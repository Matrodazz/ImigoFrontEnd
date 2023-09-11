import NavBar from "../components/NavBar";
import Unidade from "./Unidade";

async function getUnidades() {
  const url = "http://localhost:8080/api/servico";
  const resp = await fetch(url, { next: { revalidate: 0 } });
  const data = await resp.json();
  return data._embedded.entityModelList; 
}

export default async function Unidades() {
  const data = await getUnidades();

  return (
    <>
      <NavBar active={"unidade"} />
      <main>
        <div className="min-h-screen rounded bg-[#0F172A] p-10 mx-20 my-10">
          <h1 className="text-2xl text-white mb-4">Unidades parceiras</h1>
          <div id="data">
            {data.map((unidade) => (
              <Unidade key={unidade.id} unidade={unidade} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
