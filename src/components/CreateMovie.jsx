import { use, useState } from "react";
import { useNavigate } from "react-router";
import {v4 as uuidv4 } from 'uuid'

export default function CreateMovie({user}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate()

    const movieSubmit = (formData) => {
        const id = uuidv4();
        const createdOn = Date.now();

        fetch('http://localhost:3030/data/movies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': user.accessToken,
            },
            body: JSON.stringify({
                _ownerId: user._id,
                title: title, 
                description: description,
                img: image,
                _createdOn: createdOn,
                _id: id,
            })
        }).then(response => response.json() )
        .then(res => {
            navigate(`/movies/${res._id}`)
        })
        .catch(err => {
            alert(err.message);
        });
    }

    return(
    <div className="max-w-md mx-auto mt-10 mb-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Movie</h2>
      <form action={movieSubmit} className="space-y-5">
        <div>
          <label htmlFor="title" className="block mb-2 font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter movie title"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-2 font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter movie description"
            rows={4}
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block mb-2 font-medium text-gray-700">
            Movie Image
          </label>
          <input
            id="image"
            value={image}
            type="url"
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="Enter image url"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Create Movie
        </button>
      </form>
    </div>
    );
}