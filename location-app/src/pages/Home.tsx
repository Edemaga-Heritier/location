import { useState } from "react";
import HouseCard from "../components/HouseCard";
import { houses as allHouses } from "../data/house";
import SearchBar from "../components/searchBar";

export default function Home(){
    const [ search, setSearch ] = useState("");
    const filtered= allHouses.filter((h) =>h.location.toLowerCase().includes(search.toLowerCase()) );
    return(
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-800">Maison à louer </h1>
            
                <SearchBar onSearch={setSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
               {filtered.map((house) => (
                    <HouseCard key={house.id} house={house} />
                ))}

            </div>
            </div>
    )
}