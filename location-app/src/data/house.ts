import type { House } from "../types/house";

export const houses:House[] =[
    {
        id:1,
        title:"villa moderne avec piscine",
        location:"Limete",
        price:1500,
        image:"src/assets/pexels-ingo-87378.jpg",
        description:"Une villa moderne avec piscine située à Kinshasa, idéale pour les vacances.",
        bedrooms:3,
        surface:200,
        kitchen:true,
        garden:true,    
        garage:true,
        type:"villa"
    },
    {
        id:2,
        title:"appartement cosy en ville",
        location:"Ngaliema",
        price:800,
        image:"src/assets/pexels-jonathanborba-5563472 (1).jpg",
        description:"Un appartement cosy en plein centre de Kinshasa, parfait pour un séjour urbain.",
        bedrooms:3,
        surface:100,
        kitchen:true,
        garden:false,
        garage:false,
        type:"appartement"

    },
    {
        id:3,
        title:"maison familiale spacieuse",
        location:"Lemba",
        price:1200,
        image:"src/assets/pexels-pixabay-53610.jpg",
        description:"Une maison spacieuse pour les familles, avec un grand jardin et proche des écoles.",
        bedrooms:4,
        surface:250,
        kitchen:true,
        garden:true,
        garage:true,
        type:"maison"

    },
    {
        id:4,
        title:"studio moderne",
        location:"Gombe",
        price:600,
        image:"src/assets/pexels-jonathanborba-5563472.jpg",
        description:"Un studio moderne et bien équipé, idéal pour les jeunes professionnels.",
        bedrooms:1,
        surface:50,
        kitchen:true,
        garden:false,
        garage:false,
        type:"studio"
    },
    {
        id:5,
        title:"loft industriel",
        location:"Kintambo",
        price:900,
        image:"src/assets/pexels-jonathanborba-5563472 (2).jpg",
        description:"Un loft au style industriel, situé dans un quartier animé de Kinshasa.",
        bedrooms:2,
        surface:120,
        kitchen:true,
        garden:false,
        garage:true,
        type:"loft"
    },
    {
        id:6,
        title:"maison de campagne",
        location:"Kinsenso",
        price:700,
        image:"src/assets/pexels-jonathanborba-5563472 (3).jpg",
        description:"Une maison de campagne tranquille, parfaite pour échapper à l'agitation de la ville.",
        bedrooms:3,
        surface:180,
        kitchen:true,
        garden:true,
        garage:false,
        type:"maison"
    }

]   