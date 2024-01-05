import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex text-9xl">
        <span contenteditable>b</span>
        &lambda;
        <span contenteditable>r</span>
        <span className="mt-10" contenteditable>v</span>
      </div>
    </main>
  )
}
