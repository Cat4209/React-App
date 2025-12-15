export default function MovieForm({
    title,
    description,
    image,
    onTitleChange,
    onDescriptionChange,
    onImageChange,
    onSubmit,
    submitText,
}) {
    return(
    <div className="max-w-md mx-auto mt-10 mb-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {submitText}
      </h2>

      <form action={onSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={onTitleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={onDescriptionChange}
            rows={4}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            value={image}
            onChange={onImageChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
        >
          {submitText}
        </button>
      </form>
    </div>
    );
}