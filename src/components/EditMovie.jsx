import { useEffect, useState } from "react";
import { useNavigate, useParams  } from "react-router";
import { getMovieById, updateMovie } from "../utils/movieService";
import MovieForm from "./MovieForm";

export default function EditMovie({user}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [movie, setMovie] = useState([])

    const { _id: movieId } = useParams();

    const navigate = useNavigate()

    useEffect(()=>{
        getMovieById(movieId).then(data => {
            setMovie(data);
            setTitle(data.title);
            setDescription(data.description);
            setImage(data.img);
            });
        }, [])
    

    const movieEdit = async(formData) => {
        const result = await updateMovie(
            movieId,
            { title, description, img: image },
            user.accessToken
        );
        
    navigate(`/movies/${result._id}`);
    }

    const isAdmin = user && movie && user._id == movie._ownerId;

    if (!isAdmin) {
        return (
        <p className="text-center text-red-600 mt-10">
            You are not the creator of this movie!
        </p>
        );
    }

    return(
        <MovieForm
            title={title}
            description={description}
            image={image}
            onTitleChange={(e) => setTitle(e.target.value)}
            onDescriptionChange={(e) => setDescription(e.target.value)}
            onImageChange={(e) => setImage(e.target.value)}
            onSubmit={movieEdit}
            submitText="Edit Movie"
        />
    );
}