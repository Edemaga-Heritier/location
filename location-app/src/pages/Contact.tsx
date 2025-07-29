export default function Contact() {
    return (
<section className="container mx-auto px-4 py-12" >
    <h1 className="text-3xl font-bold mb-6 text-blue-600 mb-4">Contactez-nous</h1>
    <p className="text-gray-700 mb-6">
        Si vous avez des questions, des commentaires ou si vous souhaitez en savoir plus sur nos services, n'hésitez pas à nous contacter. Nous sommes là pour vous aider !
    </p>
    <form className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Nom</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" rows={4} required></textarea>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200" type="submit">Envoyer</button>
    </section>
    )

        
}