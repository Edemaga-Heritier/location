import { createContext, useEffect, useState } from "react";
import { fetchMe } from "../service/authService";


type User = {
     id: number;
    fullName?:string;
    email?: string;
    avatarUrl?: string | null;
} | null;

type House = {
    id: number;
    address: string;
    price: number;
    description: string;
    image?: string; // Optional field
    type: string; // e.g., "apartment", "house", etc.
    location: string; // e.g., "New York", "Paris", etc.
    surface: number; // in square meters
    bedrooms: number;
    bathrooms: number;
    garden?: boolean; // Optional field
    garage?: boolean; // Optional field
    userId: number; // ID of the user who owns the house
    createdAt?: string; // Optional, if you want to track when the house was created
    updatedAt?: string; // Optional, if you want to track when the house was last updated
    // Add other house properties as needed
};

type AuthContextType = {
    user: User;
    setUser: (user: User) => void;
    houses: House[];
    setHouses: (houses: House[]) => void;
    refreshHouses: () => Promise<void>;
}
   export const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {},
    houses: [],
    setHouses: () => {},
    refreshHouses: async () => {}
   });

export const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const [user, setUser] = useState<User>(null);
    const [houses, setHouses] = useState<House[]>([]);

    // Recupere l'utilisateur connnecté
    useEffect(() => {
        const load = async () => {
            try {
                const userData = await fetchMe();
                setUser(userData);
            } catch {
                setUser(null);
            }
        };

        load();
    }, []);

    const refreshHouses = async () => {
    const mod= await import('../service/houseService');
    const data = await mod.fetchHouses();
    setHouses(data);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, houses, setHouses, refreshHouses }}>
            {children}
        </AuthContext.Provider>
    )

}