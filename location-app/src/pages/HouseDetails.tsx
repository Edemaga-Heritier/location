import { useParams } from "react-router-dom"
import { houses } from "../data/house"







export default function HouseDetails() {
    const { id }=useParams<{id: string}>()
    const house=houses.find((h)=> h.id=== parseInt(id || "",10))
    if(!house) return <p>Maison introuvable</p>
    return(
        <>
        <div className=" max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
            <img src={house.image } alt={house.title} className="w-full h-64 object-cover rounded-xl" />
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

            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">reserver cette maison</button>


        </div>
        
        </> 
    )
    
   
}