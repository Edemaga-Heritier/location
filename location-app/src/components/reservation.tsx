import { useState } from "react"


export default function Reservation(){

    const [name, setName]=useState("")
    const[date,setDate] =useState("")
    const[sucess,setSuccess]=useState(false)

    const handleSubmit =(e:React.FormEvent)=>{
        e.preventDefault()
        console.log("Réservation envoyée:",{name,date})
        setSuccess(true)
    }


    return(
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
        type="text"
        placeholder="Votre nom"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="w-full border p-3 rounded-xl"
        required
        />

        <input
        type="date"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
        className="w-full border p-3 rounded-xl"
        required
        />
        <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
        >
Réserver
        </button>
        {sucess && <p className="text-green-600 mt-2">Réservation envoyée!</p>}
    </form>
    )
}