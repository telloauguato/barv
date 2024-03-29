'use client'

import { useState } from "react";

export default function Home() {

  const [b, setB] = useState(2);
  const [r, setR] = useState(1);
  const [v, setV] = useState(0);

  const handleB = ({ target: { value } }) => {
    setB(Number(value) <= 0 ? 1 : value);
    setR(Number(r) <= 0 ? 0 : (Number(r) >= Number(value) ? Number(value) - 1 : r))
    setV(Number(v) < 0 ? (Math.abs(v) >= Number(value) - r ? - (Number(value) - r - 1) : v) : v)
  }
  const handleR = ({ target: { value } }) => {
    setR(Number(value) <= 0 ? 0 : (Number(value) >= b ? b - 1 : value));
    setV(Number(v) < 0 ? (Math.abs(v) >= b - Number(value) ? - (b - Number(value) - 1) : v) : v)
  }
  const handleV = ({ target: { value } }) => setV(Number(value) < 0 ? (Math.abs(value) >= b - r ? - (b - r - 1) : value) : value);

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

  const eNegativo = numero => Number(numero) < 0 ? `(${numero})` : numero

  return (
    <main className="flex flex-col items-center justify-between p-4 md:p-8 lg:p-16 xl:p-24">

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <input type="number" className="rounded border px-2 py-1" placeholder="b" onChange={handleB} />
        <input type="number" className="rounded border px-2 py-1" placeholder="r" onChange={handleR} />
        <input type="number" className="rounded border px-2 py-1" placeholder="v" onChange={handleV} />
      </div>

      <div className="mt-10 flex text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
        <span>{b}</span>
        &lambda;
        <span>{r}</span>
        <span className="mt-10 md:mt-6">{Number(v) === 0 ? '' : v}</span>
      </div>

      <div className="mt-10 flex flex-1 flex-col text-sm md:text-base lg:text-lg xl:text-xl text-center font-mono">
        <span>{b} × ({b}² - {r}² + {eNegativo(v)} × ({v > 0 ? `${b} - ${r}` : `${b} + ${r}`}))</span>
        <span>{b} × ({Math.pow(b, 2)} - {Math.pow(r, 2)} + {eNegativo(v)} × {v > 0 ? Number(b) - Number(r) : Number(b) + Number(r)})</span>
        <span>{b} × ({Math.pow(b, 2) - Math.pow(r, 2)} + {eNegativo(v * (v > 0 ? Number(b) - Number(r) : Number(b) + Number(r)))})</span>
        <span>{b} × {Math.pow(b, 2) - Math.pow(r, 2) + v * (v > 0 ? Number(b) - Number(r) : Number(b) + Number(r))}</span>
        <span>{barv(Number(b), Number(r), Number(v))}</span>
      </div>

    </main>
  )
}
