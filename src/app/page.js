'use client'

import { useState } from "react";

export default function Home() {

  const [b, setB] = useState(2);
  const [r, setR] = useState(1);
  const [v, setV] = useState(0);

  const handleB = (event) => setB(event.target.value <= 0 ? 2 : event.target.value);
  const handleR = (event) => setR(event.target.value < 0 ? 1 : event.target.value);
  const handleV = (event) => setV(event.target.value < 0 && Math.abs(event.target.value) >= b - r ? b - r - 1 : event.target.value);

  const barv = (b, r, v) => {
    let lambda;

    if (v > 0) {
      lambda = b - r;
    } else if (v < 0) {
      lambda = b + r;
    } else {
      lambda = 0;
    }

    return b * (Math.pow(b, 2) - Math.pow(r, 2) + v * lambda);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex space-x-4">
        <input type="number" className="rounded border px-2 py-1" placeholder="b" onChange={handleB} />
        <input type="number" className="rounded border px-2 py-1" placeholder="r" onChange={handleR} />
        <input type="number" className="rounded border px-2 py-1" placeholder="v" onChange={handleV} />
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
