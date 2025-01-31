import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center space-y-6">
        <Image
          src="/srijanlogoHome.png"
          alt="Srijan Logo"
          width={150}
          height={150}
          priority
          className="mb-8"
        />
        <h1 className="text-6xl font-bold">
          Hi, I'm Srijan
        </h1>
        <p className="text-xl text-gray-600">
          Welcome to my portfolio
        </p>
      </div>
    </main>
  )
}
