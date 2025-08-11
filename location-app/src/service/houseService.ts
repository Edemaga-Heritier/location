

import API from './api'; // Adjust the path as needed


export const fetchHouses = () => API.get("/houses").then((r) => r.data);
interface HousePayload {
	// Define the properties of a house, for example:
	name: string;
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
    updatedAt?: string; // Optional, if you want to track when the house was last
	// Add other fields as needed

}

export const createHouse = (payload: HousePayload) => API.post("/houses", payload).then((r) => r.data);
export const fetchHouse = (id: number | string) => API.get(`/houses/${id}`).then((r) => r.data);