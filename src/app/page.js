import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex space-x-4">
        <input type="text" className="px-2 py-1 border rounded" placeholder='b' />
        <input type="text" className="px-2 py-1 border rounded" placeholder='r' />
        <input type="text" className="px-2 py-1 border rounded" placeholder='v' />
      </div>
      <div className="flex text-9xl">
        <span>b</span>
        &lambda;
        <span>r</span>
        <span className="mt-10">v</span>
      </div>
    </main>
  )
}
