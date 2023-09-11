import NavBar from "../components/NavBar";
import Suporte from "./Suporte";

async function getSuportes() {
  const url = "http://localhost:8080/api/suporte";
  const resp = await fetch(url, { next: { revalidate: 0 } });
  const data = await resp.json();
  return data._embedded.entityModelList; 
}

export default async function Suportes() {
  const data = await getSuportes();

  return (
    <>
      <NavBar active={"suporte"} />
      <main>
        <div className="min-h-screen rounded bg-[#0F172A] p-10 mx-20 my-10">
          <h1 className="text-2xl text-white mb-4">Suportes abertos</h1>
          <div id="data">
            {data.map((suporte) => (
              <Suporte key={suporte.id} suporte={suporte} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
