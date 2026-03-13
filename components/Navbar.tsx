import Link from "next/link"
export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between p-4">

        <h1 className="font-bold text-lg">
          🔥 Learning Streak
        </h1>

        <div className="space-x-6">
          <Link href="/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>

          <Link href="/history" className="hover:text-gray-300">
            History
          </Link>
        </div>

      </div>
    </nav>
  )
}