import { Link } from "react-router-dom";

export default function NavBar() {
return(
    <nav className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
                <Link to="/" className="text-bleu-600 font-bold text-2xl">Lokaz</Link>
           <ul className="flex gap-4 text-gray-700 font-meduim">
            <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
            </li>
            <li>
                <Link to="/about" className="hover:text-blue-600 transition-colors">A propos</Link>
            </li>
            <li>
                <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </li>
            </ul>     
            
        </div>
    </nav>
        
)
}