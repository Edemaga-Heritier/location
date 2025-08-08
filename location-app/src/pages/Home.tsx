import  { useState,useEffect } from 'react'
import { houses } from '../data/house';
import Filters from '../components/filters';
import type { House } from '../types/house';
import HouseCard from '../components/HouseCard';
// Make sure the file exists at the specified path and exports getAllHouses
// If the file does not exist, create it as shown below:
import { getAllHouses } from '../service/houseService';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [housesData, setHouses] = useState<House[]>([]);
    const [filteredHouses, setFilteredHouses] = useState<House[]>(houses);

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const data = await getAllHouses();
                setHouses(data);
                setFilteredHouses(data);
            } catch (error) {
                console.error('Erreur chargement maison', error);
            } finally {
                setLoading(false);
            }
        };
        fetchHouses();
    }, []);

    if (loading) return <div>chargement....</div>;

    type FiltersType = {
        location?: string;
        bedrooms?: string;
        surface?: string;
        type?: string;
        kitchen?: string;
        garden?: string;
        garage?: string;
        minPrice: number;
        maxPrice: number;
    };

    const handleFilter = (filters: FiltersType) => {
        const filtered = housesData.filter(house => {
            return (
                (filters.location ? house.location.includes(filters.location) : true) &&
                (filters.bedrooms ? house.bedrooms >= parseInt(filters.bedrooms) : true) &&
                (filters.surface ? house.surface >= parseInt(filters.surface) : true) &&
                (filters.type ? house.type === filters.type : true) &&
                (filters.kitchen !== "" ? house.kitchen === (filters.kitchen === "true") : true) &&
                (filters.garden !== "" ? house.garden === (filters.garden === "true") : true) &&
                (filters.garage !== "" ? house.garage === (filters.garage === "true") : true) &&
                (house.price >= filters.minPrice && house.price <= filters.maxPrice)
            );
        });
        setFilteredHouses(filtered);
    };

    return (
        <>
            <Filters onFilter={handleFilter} />
            <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {filteredHouses.map((house) => (
                    <HouseCard key={house.id} house={house} />
                ))}
            </div>

            {filteredHouses.length === 0 && <div>Aucune maison trouvée</div>}
            {filteredHouses.length > 0 && (
                <div className="text-center mt-4">
                    <p>Nombre de maisons trouvées : {filteredHouses.length}</p>
                </div>
            )}
        </>
    );
}
