interface Props {
    location:string
    onLocationChange:(val:string) => void
    maxPrice:number
    onMaxPriceChange:(val:number) => void
}

export default function Filters({ location, onLocationChange, maxPrice, onMaxPriceChange }: Props) {
    return(
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-xl shadow mb-6">
            <div className="flex-1">
                <label className="block text-gray-700 mb-2">Emplacement</label>
                <input 
                    type="text" 
                    value={location} 
                    onChange={(e) => onLocationChange(e.target.value)} 
                    className="w-full p-2 border rounded-lg"
                />
            </div>
            <div className="flex-1">
                <label className="block text-gray-700 mb-2">Prix maximum</label>
                <input 
                    type="number" 
                    value={maxPrice} 
                    onChange={(e) => onMaxPriceChange(Number(e.target.value))} 
                    placeholder="Ex: Kinshasa"
                    className="w-full p-2 border rounded-lg"
                />
            </div>

        </div>
    )
}