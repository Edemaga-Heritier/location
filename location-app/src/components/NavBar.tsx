import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const { user } = useContext(AuthContext);

    const handleLogin = () =>{
        window.location.href = `${import.meta.env.VITE_API_URL} || "http://localhost:3333"/auth/google`;
    }
return(
    <nav className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
                <Link to="/" className="text-bleu-600 font-bold text-2xl">Lokaz</Link>
                <div className="flex items-center gap-4">
                    <div className="md:hidden">
                        <button onClick={() => setOpen(!open)}>
                            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
 <ul className="hidden md:flex gap-4 text-gray-700 font-meduim">
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
                <div className="flex items-center gap-4">
                    {!user ? (
                        <button onClick={handleLogin} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                            se connecter avec Google
                        </button>
                    ):(
                        <div className="flex items-center gap-3">
                            {user.avatarUrl ?<img src={user.avatarUrl} alt="Avatar" className="w-8 h-8 rounded-full" /> :null}
                            <div className="text-sm">{user.fullName}</div>
                            </div>
                    )}
          
        </div>
        {open && (<ul className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full px-4 py-2">
            <li className="py-2">   
                <Link to="/" className="block hover:text-blue-600 transition-colors" onClick={() => setOpen(false)}>Accueil</Link>
            </li>
            <li className="py-2">   
                <Link to="/about" className="block hover:text-blue-600 transition-colors" onClick={() => setOpen(false)}>A propos</Link>
            </li>
            <li className="py-2">   
                <Link to="/contact" className="block hover:text-blue-600 transition-colors" onClick={() => setOpen(false)}>Contact</Link>
            </li>
            </ul>)
        }
        </div>
    </nav>
        
)
}