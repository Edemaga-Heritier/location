
import { Link } from 'react-router-dom';
import type { House } from '../types/House'; // Adjust the path as needed
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
    <p className="text-sm text-gray-500">{house.location}</p>
    <p className="text-blue font-bold mt-2">${house.price} / mois</p>
<Link to={`/house/${house.id}`} className="inline-block mt-3 text-sm text-white bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 ">
voir les details
</Link>
</div>
</div>
    )
}