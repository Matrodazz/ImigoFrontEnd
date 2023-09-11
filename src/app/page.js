import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo à Imigo</h1>
          <p className="text-3xl text-gray-600 text-lg">Um novo passo na jornada pós-venda</p>
        </div>
      </main>
    </div>
  );
}
