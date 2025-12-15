import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const abortController = new AbortController();

        const res = fetch('https://us-central1-react-app-2eff5.cloudfunctions.net/server/data/movies', {signal: abortController.signal})
        .then(response => response.json()).then(result => [
            console.log(result),
            setMovies(Object.values(result))
        ]).catch(err => {
            console.error(err);
        })

        return () => {abortController.abort()}

    }, [])

    return(
    <section className="bg-white min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Movies catalog
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
                <NavLink to={`/movies/${movie._id}`}>
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
                </NavLink>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-center">
                    <NavLink to={`/movies/${movie._id}`}>
                        {movie.title}
                    </NavLink>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}