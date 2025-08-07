import { useState } from "react";

interface FiltersType {
    bedrooms: string;
    surface: string;
    kitchen: string;
    garden: string;
    garage: string;
    type: string;
    location: string;
    maxPrice: number;
    minPrice: number;
}

interface Props{
    onFilter:(filters: FiltersType) => void;
}

export default function Filters({onFilter}:Props){
    const [bedrooms, setBedrooms] = useState("");
    const [surface, setSurface] = useState("");
    const [kitchen, setKitchen] = useState("");
    const [garden, setGarden] = useState("");
    const [garage, setGarage] = useState("");
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [minPrice, setMinPrice] = useState(0);

    const handleFilter = () => {
        onFilter({
            bedrooms,
            surface,
            kitchen,
            garden,
            garage,
            type,
            location,
            maxPrice,
            minPrice
        });
    };

    return(
        <div className="bg-white p-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <input
            type="text"
            placeholder="Lieu(ville/quartier)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border rounded"
        />
        <input
            type="number"
            placeholder="Chambres min"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="p-2 border rounded"
        />
        <input
            type="number"
            placeholder="Surface min (m²)"
            value={surface}
            onChange={(e) => setSurface(e.target.value)}
            className="p-2 border rounded"
        />
        <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-2 border rounded"
        >
            <option value="">Type de maison</option>
            <option value="appartement">Appartement</option>
            <option value="maison">Maison</option>
            <option value="villa">Villa</option>
            <option value="studio">Studio</option>
        </select>
        <select
            value={kitchen}
            onChange={(e) => setKitchen(e.target.value)}
            className="p-2 border rounded"
        >
            <option value="">Cuisine</option>
            <option value="true">Oui</option>
            <option value="false">Non</option>
        </select>
        <select
            value={garden}
            onChange={(e) => setGarden(e.target.value)}
            className="p-2 border rounded"
        >
            <option value="">Jardin</option>
            <option value="true">Oui</option>
            <option value="false">Non</option>
        </select>
        <select
            value={garage}
            onChange={(e) => setGarage(e.target.value)}
            className="p-2 border rounded"
        >
            <option value="">Garage</option>
            <option value="true">Oui</option>
            <option value="false">Non</option>
        </select>
    <div className="col-span-1 md:col-span-2 flex items-center space-x-2">
    <span>Prix : $</span>
    <input
    type="number"
    min="0"
   
    value={minPrice}
    onChange={(e) => setMinPrice(+e.target.value)}
    className="p-2 border rounded"
    />
    <span>{maxPrice} $</span>
    <input
        type="number"
        min="0"
        
        value={maxPrice}
        onChange={(e) => setMaxPrice(+e.target.value)}
        className="p-2 border rounded"
    />
    </div>
    <button
        onClick={handleFilter}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Appliquer les filtres
        </button>

    </div>
    )

}