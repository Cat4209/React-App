import { Link } from "react-router";

export default function NotFound() {
    return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-gray-900 mb-4">
            404
        </h1>

        <h2 className="text-2xl font-semibold mb-2">
            Page not found
        </h2>

        <p className="text-gray-600 mb-6">
            Sorry, the page you are looking for does not exist or has been removed.
        </p>

        <Link
            to="/"
            className="inline-block px-6 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-700 transition-colors"
        >
            Return to home
        </Link>
        </div>
    </div>
    );
}