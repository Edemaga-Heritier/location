import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function MainLayout(){
    return(
        <div>
          <NavBar />
            <main className="min-h-screen bg-gray-100 p-6">
                <div className="container mx-auto px-4 py-6">
                  <Outlet />   
                </div>
               
                </main>  
                <footer className="bg-white text-center py-4 shadow-inner">
                    <p className="text-sm text-gray-500">2025 Lokaz -tous droits réservés</p>
                </footer>
        </div>
    )
}