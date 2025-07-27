import { useState } from "react";
import HouseCard from "../components/HouseCard";
import { houses as allHouses } from "../data/house";
import SearchBar from "../components/searchBar";
import Filters from "../components/filters";

export default function Home(){
  const[location, setLocation] = useState("");
  const[maxPrice, setMaxPrice] = useState(0);

  const filtered = allHouses.filter((house) => {
    const matchesLocation = house.location.toLowerCase().includes(location.toLowerCase());
    const matchesPrice = maxPrice === 0 || house.price <= maxPrice;
    return matchesLocation && matchesPrice;
  })
    return (
         
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-800">Maison à louer </h1>
            <Filters
            location={location}
            onLocationChange={setLocation}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.length > 0 ? (
                    filtered.map((house) => (
                        <HouseCard key={house.id} house={house} />)
                )) : (
                    <p className="col-span-full text-center text-gray-500">Aucune maison trouvée</p>
                )}

            </div>
            </div>
            
    )
}