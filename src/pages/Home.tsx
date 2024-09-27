import Contador from "../components/Contador"

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-20">
      <div className="p-8 text-center">
        <h1 className="text-5xl font-bold text-black mb-4">
          Welcome to {''}
          <span className="text-indigo-700">Redux</span>
        </h1>
        <p className="text-lg mb-8 text-gray-700">
          A JS library for predictable and maintainable global state management
        </p>
        <Contador />
      </div>
    </main>
  )
}
