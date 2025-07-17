import HouseCard from "../components/HouseCard";
import { houses } from "../data/house";

export default function Home(){
    return(
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-800">Maison à louer </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {houses.map(house => (
                    <HouseCard key={house.id} house={house} />
                ))}

            </div>
            </div>
    )
}