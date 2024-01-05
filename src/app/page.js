import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <div className="flex space-x-4">
    <input type="number" className="rounded border px-2 py-1" placeholder="b" />
    <input type="number" className="rounded border px-2 py-1" placeholder="r" />
    <input type="number" className="rounded border px-2 py-1" placeholder="v" />
  </div>
  <div className="mt-10 flex text-9xl">
    <span>b</span>
    &lambda;
    <span>r</span>
    <span className="mt-10">v</span>
  </div>
  <div className="mt-10 flex flex-1 flex-col text-xl">
    <span>Resolução</span>
    <span>Resolução</span>
    <span>Resolução</span>
    <span>Resolução</span>
    <span>Resolução</span>
    <span>Resolução</span>
    <span>Resolução</span>
  </div>
</main>
  )
}
