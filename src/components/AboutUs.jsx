export default function AboutUs() {
    return(
      <div className="bg-gray-50 min-h-screen">
      <section className="bg-indigo-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our Movie Platform
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
            We create a place where movie lovers discover, share and manage
            their favorite films.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our platform was built by passionate developers and movie fans who
            believe that films are more than just entertainment. They are
            stories, emotions and inspiration.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We aim to provide a clean, fast and intuitive experience where users
            can explore movies, create collections and share opinions with
            others.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-2 text-indigo-600">
              🎬 Our Mission
            </h3>
            <p className="text-gray-600">
              To connect people through stories and make movie discovery easy
              and enjoyable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-2 text-indigo-600">
              🚀 Our Vision
            </h3>
            <p className="text-gray-600">
              To become a trusted hub for movie lovers worldwide.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-2 text-indigo-600">
              💡 Innovation
            </h3>
            <p className="text-gray-600">
              We constantly improve the platform with modern technologies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-2 text-indigo-600">
              🤝 Community
            </h3>
            <p className="text-gray-600">
              We believe strong communities grow from shared passions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Alex", "Maria", "John"].map((name) => (
              <div
                key={name}
                className="p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold">
                  {name[0]}
                </div>
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-600 text-sm">Frontend Developer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Join Our Movie Journey
        </h2>
        <p className="mb-6 text-indigo-100">
          Discover, create and share your favorite movies with the world.
        </p>
        <button
          className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold
                     hover:bg-indigo-100 transition"
        >
          Get Started
        </button>
      </section>
    </div>
    );
}