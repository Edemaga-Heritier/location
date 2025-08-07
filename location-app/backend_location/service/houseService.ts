import axios from 'axios'

const API = axios.create({
    baseURL:'http://localhost:3333',
})

export const getAllHouses = async () =>{
    const res =await API.get('/houses')
    return res.data
}

export const getHouseById = async (id: number | string) =>{
    const res = await API.get(`/houses/${id}`)
    return res.data
}

interface House {
    // Define the properties of a house, for example:
    id?: number;
    name: string;
    address: string;
    price: number;
    // Add other relevant fields
}

export const createHouse = async (data: House) => {
    const res = await API.post('/houses', data)
    return res.data
}
export const updateHouse = async (id:number, data: any) => {
    const res = await API.put(`/houses/${id}`, data)
    return res.data
}
export const deleteHouse = async (id: number) => {
    const res = await API.delete(`/houses/${id}`)
    return res.data
}
