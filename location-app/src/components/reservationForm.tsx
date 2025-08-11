import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext"; // Adjust the path as needed
import { createHouse } from "../service/houseService";

 


 export default function ReservationForm() {

const {user,refreshHouses} = useContext(AuthContext);
const[form, setForm] = useState({
    title: '',
    location: '',
    price: '',
    image: '',
    description: '',
    bedrooms: 1,
    bathrooms: 1,
    surface: 50,
    kitchen: false,     
    garden: false,
    garage: false,
    type: 'Location', // Default type

})

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState<string | null>(null);
const [error, setError] = useState<string | null>(null);

if(!user) return null;

const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try{
        await createHouse({
            ...form,
            price: Number(form.price),
            name: form.title, // Assuming 'name' should be the same as 'title'
            userId: user.id,  // Assuming 'user' has an 'id' property
        });
        setSuccess('Maison ajoutée avec succès !');
        setForm({...form, title: '', location: '', price: '', image: '', description: '', bedrooms: 1, bathrooms: 1, surface: 50, kitchen: false, garden: false, garage: false, type: 'Location' });
        await refreshHouses();
    }catch {
        setError('Erreur lors de l\'ajout de la maison. Veuillez réessayer.');
    } finally {
        setLoading(false);
        setTimeout(() => setSuccess(null), 3000);
    }
     }
     return (
        <form onSubmit={onSubmit} className="bg-white p-4 rounded-lg shadow mt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} type="text" placeholder="Titre de la maison" className="p-2 border rounded" />
                <select value={form.type} onChange={(e) => setForm({...form, type: e.target.value})} className="p-2 border rounded">
                    <option value="Location">Location</option>
                    <option value="Vente">Vente</option>
                </select>
                <input required value={form.location} onChange={(e) => setForm({...form, location: e.target.value})} type="text" placeholder="Emplacement" className="p-2 border rounded" />
                <input required value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} type="number" placeholder="Prix" className="p-2 border rounded" />
                <input value={form.image} onChange={(e) => setForm({...form, image: e.target.value})} type="text" placeholder="URL de l'image" className="p-2 border rounded" />
                <textarea value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} placeholder="Description" className="p-2 border rounded" rows={3}></textarea>
                <input value={form.bedrooms} onChange={(e) => setForm({...form, bedrooms: Number(e.target.value)})} type="number" placeholder="Nombre de chambres" className="p-2 border rounded"  />
                <input value={form.bathrooms} onChange={(e) => setForm({...form, bathrooms: Number(e.target.value)})} type="number" placeholder="Nombre de salles de bain" className="p-2 border rounded" />
</div>
<div className="flex gap-4 items-center">
    <label className="flex items-center gap-2">
        <input type="checkbox" checked={form.kitchen} onChange={(e) => setForm({...form, kitchen: e.target.checked})} className="mr-2" />
        Cuisine
    </label>
    <label className="flex items-center gap-2">
        <input type="checkbox" checked={form.garden} onChange={(e) => setForm({...form, garden: e.target.checked})} className="mr-2" />
        Jardin
    </label>
    <label className="flex items-center gap-2">
        <input type="checkbox" checked={form.garage} onChange={(e) => setForm({...form, garage: e.target.checked})} className="mr-2" />
        Garage
    </label>
</div>

<div className="flex gap-3 items-center">
    <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors disabled:opacity-50">
        {loading ? 'Envoi...' : 'Ajouter la maison'}
    </button>
    {success && <span className="text-green-600">{success}</span>}
    {error && <span className="text-red-600">{error}</span>}
</div>
        </form>
     )

 }