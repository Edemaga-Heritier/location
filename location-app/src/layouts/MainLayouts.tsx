import { Outlet } from "react-router-dom";

export default function MainLayout(){
    return(
        <div>
            <header className="bg-white shadow p-4">
                <h1 className="text-xl font-bold text-blue-600">Location Maison</h1>
            </header>
            <main className="min-h-screen bg-gray-100 p-6">
                <Outlet />
                </main>  
                <footer className="bg-white text-center py-4 shadow-inner">
                    <p className="text-sm text-gray-500">&copy;2025 -tous droits réservés</p>
                </footer>
        </div>
    )
}