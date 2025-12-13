import { NavLink, Link } from "react-router";

export default function Header({user, setUser}) {
    return(
        <header className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="text-xl font-bold text-gray-800">
            <Link to="/">FLUX</Link>
            </div>

            <nav className="flex space-x-6">
                <NavLink to="/" className={ ({isActive}) => isActive? "underline text-gray-600 hover:text-gray-900" : "text-gray-600 hover:text-gray-900"}>Home</NavLink>
                <NavLink to="/movies" className={ ({isActive}) => isActive? "underline text-gray-600 hover:text-gray-900" : "text-gray-600 hover:text-gray-900"}>Movies</NavLink>
            </nav>
            {user ? (
                <>Logout</>
            ):(
            <NavLink to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Login
            </NavLink>
            )}
            
        </div>
    </header>
    );
}