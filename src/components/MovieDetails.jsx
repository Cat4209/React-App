import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function MovieDetails({user}) {
    const [movie, setMovie] = useState([])

    const { _id: movieId } = useParams();
    console.log(movieId)
    useEffect(()=>{
        const abortController = new AbortController();

        const res = fetch('http://localhost:3030/data/movies', {signal: abortController.signal})
        .then(response => response.json()).then(results => {
            const result = results.find(
                m => m._id === movieId
            )
            setMovie(result)
        }).catch(err => {
            console.error(err);
        })

        return () => {abortController.abort()}
    }, [])


    const isAdmin = user && movie && user._id == movie._ownerId;

    return(
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="h-full">
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8 flex flex-col">
            <h1 className="text-3xl font-bold mb-4">
              {movie.title}
            </h1>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {movie.description} {isAdmin && <span> - You are the Admin!</span>}
            </p>

            <span className="text-sm text-gray-500 mt-auto">
              Created:{" "}
              {new Date(movie._createdOn).toLocaleDateString()}
            </span>
          </div>

        </div>
      </div>
    </section>
    );
}