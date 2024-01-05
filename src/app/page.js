'use client'

import { useState } from "react";

export default function Home() {

  const [b, setB] = useState(2);
  const [r, setR] = useState(1);
  const [v, setV] = useState(0);
  const handleB = (event) => setB(event.target.value);
  const handleR = (event) => setR(event.target.value);
  const handleV = (event) => setV(event.target.value);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex space-x-4">
        <input type="number" className="rounded border px-2 py-1" placeholder="b" value={b} onBlur={handleB} />
        <input type="number" className="rounded border px-2 py-1" placeholder="r" value={r} onBlur={handleR} />
        <input type="number" className="rounded border px-2 py-1" placeholder="v" value={v} onBlur={handleV} />
      </div>
      <div className="mt-10 flex text-9xl">
        <span>{b}</span>
        &lambda;
        <span>{r}</span>
        <span className="mt-10">{v}</span>
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
