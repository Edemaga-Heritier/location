interface Props{
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
    return(
        <div className="mb-6">
            <input
            type="text"
            placeholder="Rechercher par ville..."
            className="w-full p-3 border rounded-xl"
            onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    )
}