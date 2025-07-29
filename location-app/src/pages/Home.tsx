import  { useState } from 'react'
import { houses } from '../data/house';
import Filters from '../components/filters';
import type { House } from '../types/house';
import HouseCard from '../components/HouseCard';

export default function Home() {
    const [filteredHouses, setFilteredHouses] = useState<House[]>(houses);
    const handleFilter = (filters: any) => {
        const filtered = houses.filter(house => {
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
             <HouseCard key={house.id} house={house}/>
                       
                ))}
            </div>
        </>
    );
}
