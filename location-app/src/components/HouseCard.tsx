import{MapPin, DollarSign} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { House } from '../types/house'; 
// Adjust the path as needed
 // Adjust the path as needed

interface Props {
    house: House;
}
export default function HouseCard({house}: Props) {
    return(
<div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
<img src={house.image} alt={house.title} className="w-full h-48 object-cover" />
<div className="p-4">
    <h2 className="text-lg font-semibold">{house.title}</h2>
    <p  className="text-sm text-gray-500 flex items-center">
        <MapPin className="w-4 h-4 mr-1" />
        {house.location}</p>
    <p  className="text-blue-500 font-bold mt-2">
        <DollarSign className="inline w-4 h-4 mr-1" />
        {house.price} / mois</p>
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
<Link to={`/house/${house.id}`} className="inline-block mt-3 text-sm text-white bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 ">
voir les details
</Link>
</div>
</div>
    )
}