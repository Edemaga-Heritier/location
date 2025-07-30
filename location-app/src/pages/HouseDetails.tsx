import { useParams } from "react-router-dom"
import { houses } from "../data/house"
import { useState } from "react";







export default function HouseDetails() {
    const[showForm, setShowForm] = useState(false);
    const { id }=useParams<{id: string}>()
    const house=houses.find((h)=> h.id=== parseInt(id || "",10))
    if(!house) return <p>Maison introuvable</p>
    return(
        <>
        <div className=" max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
            <img src={new URL(`../assets/${house.image}`, import.meta.url).href} alt={house.title} className="w-full h-64 object-cover rounded-xl" />
            <h2 className="text-2xl font-bold  mt-4">{house.title}</h2>
            <p className="text-gray-600">{house.location}</p>
            <p className="text-xl text-blue-600 font-semibold mt-2">{house.price}$</p>
            <p className="mt-4 text-gray-700">{house.description}</p>
             <div className="mt-3">
        <p className="text-sm text-gray-600">Chambres: {house.bedrooms}</p>
        <p className="text-sm text-gray-600">Surface: {house.surface} m²</p>
        <p className="text-sm text-gray-600">Type: {house.type}</p>
        <p className="text-sm text-gray-600">Cuisine: {house.kitchen
            ? 'Oui' : 'Non'}</p>
        <p className="text-sm text-gray-600">Jardin: {house.garden
            ? 'Oui' : 'Non'}</p>
        <p className="text-sm text-gray-600">Garage: {house.garage
            ? 'Oui' : 'Non'}</p>
    </div>

            <button
            onClick={() => setShowForm(true)}
            
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">reserver cette maison</button>


        </div>
        {
            showForm &&(
                <div className="mt-8 p-6 border rounded-xl shadow-lg bg-white max-w-xl mx-auto">
<h2 className="text-2xl font-bold mb-4">Formulaire de reservation</h2>
<form className="space-y-4">
    <div>
        <label className="block text-sm font-medium text-gray-700">Nom</label>
        <input type="text" 
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder="Entrez votre nom" />
    </div>
    <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" 
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder="Entrez votre email" />
                
    </div> 
    <div>
        <label className="block text-sm font-medium text-gray-700">Date de reservation</label>
        <input type="date" 
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
    </div>  
    <button 
        type="submit"
        className="w-full px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
        Envoyer la demande
    </button>   
</form>
                
                </div>
            )
        }
        
        
        </> 
    )
    
   
}