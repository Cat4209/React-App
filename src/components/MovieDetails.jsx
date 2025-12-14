import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";

export default function MovieDetails({user}) {
    const [movie, setMovie] = useState([])
    const navigate = useNavigate()

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

    const deleteMovie = async () =>{
        if(confirm("Are you sure you want to delete movie?")){
            await fetch(`http://localhost:3030/data/movies/${movieId}`, {
                method: 'DELETE',
                headers: {
                    "X-Authorization": user.accessToken,
                }
            }).then(response => response.json())
            .then(data => {
                alert('Was deleted successfuly')
                navigate('/movies')
            }).catch(err => {
                alert(err.message)
            })
        }
    }


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
              {movie.description}
            </p>

            <span className="text-sm text-gray-500 mt-auto">
              Created:{" "}
              {new Date(movie._createdOn).toLocaleDateString()}
            </span>
            { isAdmin && (
              <form action={deleteMovie}>
                <button
                  className="px-4 py-2 mt-4 bg-red-600 text-white text-center font-semibold rounded-md
                            hover:bg-red-700 transition duration-200
                            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Delete
                </button>
              </form>
            ) }
              
          </div>

        </div>
      </div>
    </section>
    );
}