import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <h1 className="text-4x1 font-bold">Mi taller MVP</h1>
      <h1 className="text-4x1 font-bold">Version DEV</h1>
      <h2 className="text-2x1 font-semibold mb-4">La solución inteligente para talleres que quieren profesionalizar su gestión y llevar el control total de sus servicios y clientes.</h2>
      <h3 className="text-2x1 font-semibold mb-4">Catálogo de Servicios</h3>

      <ul className="space-y-2">
        <li className="p-3 border rounded">Cambio de Aceite</li>
        <li className="p-3 border rounded">Revisión de Frenos</li>
        <li className="p-3 border rounded">Reparación de Aire Acondicionado</li>
        <li className="p-3 border rounded">Lavacar</li>
      </ul>
    </main>
  );
}
