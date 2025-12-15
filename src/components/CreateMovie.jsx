import { use, useState } from "react";
import { useNavigate } from "react-router";
import {v4 as uuidv4 } from 'uuid'
import { createMovie } from "../utils/movieService";
import MovieForm from "./MovieForm";

export default function CreateMovie({user}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate()

    const movieSubmit = (formData) => {
        const id = uuidv4();
        const createdOn = Date.now();

        const result = createMovie(
          {_id: id,
          _ownerId: user._id,
          title,
          description,
          img: image,
          _createdOn: createdOn},
          user.accessToken
        )
        result.then(data=>{
          navigate(`/movies/${data._id}`);
        })
    }

    return(
      <MovieForm 
        title={title}
        description={description}
        image={image}
        onTitleChange={(e) => setTitle(e.target.value)}
        onDescriptionChange={(e) => setDescription(e.target.value)}
        onImageChange={(e) => setImage(e.target.value)}
        onSubmit={movieSubmit}
        submitText="Create Movie"
      />
    );
}