import { createContext, useEffect, useState } from "react";
import { fetchMe } from "../service/authService";


type User = {
     id: number;
    fullName?:string;
    email?: string;
    avatarUrl?: string | null;
} | null;

type AuthContextType = {
    user: User;
    setUser: (user: User) => void;
    houses: any[]; // Adjust type as needed
    setHouses: (houses: any[]) => void;
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
    const [houses, setHouses] = useState<any[]>([]); // Adjust type as needed

    // Recupere l'utilisateur connnecté
    useEffect(() => {
        const load = async () => {
            try {
                const userData = await fetchMe();
                setUser(userData);
            } catch (error) {
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
    );
