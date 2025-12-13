import { Link } from "react-router";

export default function Home() {
    return(
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
         Discover the world of  <span className="text-indigo-400">movies</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-10">
          The best films, detailed descriptions, and beautiful posters—all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/movies"
            className="px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold shadow-lg"
          >
            Go to the catalog
          </Link>

          <Link
            to="/about"
            className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition font-semibold"
          >
            Find out more
          </Link>
        </div>
      </div>
    </section>
    );
}