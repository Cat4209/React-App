export default function Footer() {
    return(
    <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2025 FLUX. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Contacts</a>
            </div>
        </div>
    </footer>
    );
}