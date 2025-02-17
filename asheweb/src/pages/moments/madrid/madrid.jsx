import	{React,useEffect} from 'react';
import Gallery from "../../../components/gallery/gallery"; 

import Madrid1 from "../../../assets/images/moments/madriz/gallery/Madrid1.jpg";
import Madrid2 from "../../../assets/images/moments/madriz/gallery/Madrid2.jpg";
import Madrid3 from "../../../assets/images/moments/madriz/gallery/Madrid3.jpg";
import Madrid4 from "../../../assets/images/moments/madriz/gallery/Madrid4.jpg";
import Madrid5 from "../../../assets/images/moments/madriz/gallery/Madrid5.jpg";
import Madrid6 from "../../../assets/images/moments/madriz/gallery/Madrid6.jpg";
import Madrid7 from "../../../assets/images/moments/madriz/gallery/Madrid7.jpg";
import Madrid8 from "../../../assets/images/moments/madriz/gallery/Madrid8.jpg";
import Madrid9 from "../../../assets/images/moments/madriz/gallery/Madrid9.jpg";
import Madrid10 from "../../../assets/images/moments/madriz/gallery/Madrid10.jpg";
import Madrid11 from "../../../assets/images/moments/madriz/gallery/Madrid11.jpg";
import Madrid12 from "../../../assets/images/moments/madriz/gallery/Madrid12.jpg";
//import Madrid13 from "../../../assets/images/moments/madriz/gallery/Madrid13.jpg";
//import Madrid14 from "../../../assets/images/moments/madriz/gallery/Madrid14.jpg";
import Madrid15 from "../../../assets/images/moments/madriz/gallery/Madrid15.jpg";
import Madrid16 from "../../../assets/images/moments/madriz/gallery/Madrid16.jpg";
import Madrid17 from "../../../assets/images/moments/madriz/gallery/Madrid17.jpg";
import Madrid18 from "../../../assets/images/moments/madriz/gallery/Madrid18.jpg";
import Madrid19 from "../../../assets/images/moments/madriz/gallery/Madrid19.jpg";
import Madrid20 from "../../../assets/images/moments/madriz/gallery/Madrid20.jpg";
import Madrid21 from "../../../assets/images/moments/madriz/gallery/Madrid21.jpg";
import Madrid22 from "../../../assets/images/moments/madriz/gallery/Madrid22.jpg";
import Madrid23 from "../../../assets/images/moments/madriz/gallery/Madrid23.jpg";
import Madrid24 from "../../../assets/images/moments/madriz/gallery/Madrid24.jpg";
import Madrid25 from "../../../assets/images/moments/madriz/gallery/Madrid25.jpg";
import Madrid26 from "../../../assets/images/moments/madriz/gallery/Madrid26.jpg";
import Madrid27 from "../../../assets/images/moments/madriz/gallery/Madrid27.jpg";
import Madrid28 from "../../../assets/images/moments/madriz/gallery/Madrid28.jpg";
import Madrid29 from "../../../assets/images/moments/madriz/gallery/Madrid29.jpg";
import Madrid30 from "../../../assets/images/moments/madriz/gallery/Madrid30.jpg";
import Madrid31 from "../../../assets/images/moments/madriz/gallery/Madrid31.jpg";
import Madrid32 from "../../../assets/images/moments/madriz/gallery/Madrid32.jpg";
import Madrid33 from "../../../assets/images/moments/madriz/gallery/Madrid33.jpg";
import Madrid34 from "../../../assets/images/moments/madriz/gallery/Madrid34.jpg";
import Madrid35 from "../../../assets/images/moments/madriz/gallery/Madrid35.jpg";
import Madrid36 from "../../../assets/images/moments/madriz/gallery/Madrid36.jpg";
import Madrid37 from "../../../assets/images/moments/madriz/gallery/Madrid37.jpg";
import Madrid38 from "../../../assets/images/moments/madriz/gallery/Madrid38.jpg";
import Madrid39 from "../../../assets/images/moments/madriz/gallery/Madrid39.jpg";
import Madrid40 from "../../../assets/images/moments/madriz/gallery/Madrid40.jpg";
import Madrid41 from "../../../assets/images/moments/madriz/gallery/Madrid41.jpg";
import Madrid42 from "../../../assets/images/moments/madriz/gallery/Madrid42.jpg";
import Madrid43 from "../../../assets/images/moments/madriz/gallery/Madrid43.jpg";
import Madrid44 from "../../../assets/images/moments/madriz/gallery/madrid44.jpg";
import Madrid45 from "../../../assets/images/moments/madriz/gallery/madrid45.jpg";
import Madrid46 from "../../../assets/images/moments/madriz/gallery/madrid46.jpg";
import Madrid47 from "../../../assets/images/moments/madriz/gallery/madrid47.jpg";
import Madrid48 from "../../../assets/images/moments/madriz/gallery/madrid48.jpg";
import Madrid49 from "../../../assets/images/moments/madriz/gallery/madrid49.jpg";

const items = [
    { text: "Estacione Atocha", img: Madrid1, orientation: "vertical" },
    { text: "Plaza Mayor", img: Madrid3, orientation: "horizontal" },
    { text: "Kiosco de la Plaza Mayor", img: Madrid4, orientation: "horizontal" },
  
    
   
    { text: "Mercado de San Miguel", img: Madrid5, orientation: "horizontal" },
    { text: "Catedral de la Almudena", img: Madrid6, orientation: "horizontal" },
    { text: "Puerta del Sol", img: Madrid2, orientation: "vertical" },
    { text: "Cena en el centro", img: Madrid19, orientation: "vertical" },
    { text: "Plaza de Cibeles", img: Madrid7, orientation: "horizontal" },
  
    { text: "El Retiro", img: Madrid8, orientation: "horizontal" },
  
    { text: "Kiosco de la Musica", img: Madrid9, orientation: "horizontal" },
    { text: "Plaza de España", img: Madrid25, orientation: "vertical" },
    { text: "Lago del Retiro", img: Madrid10, orientation: "horizontal" },
   
    { text: "Velázquez en el Prado", img: Madrid11, orientation: "horizontal" },
  
    { text: "Plaza de San Andrés", img: Madrid44, orientation: "vertical" },
    { text: "Cena en el Barrio de las Letras", img: Madrid12, orientation: "horizontal" },
    { text: "Café del Mercado de San Antón", img: Madrid30, orientation: "horizontal" },

   
   { text: "Calle de San Pedro", img: Madrid48, orientation: "vertical" },
    { text: "Catedral de la Almudena", img: Madrid15, orientation: "horizontal" },
    { text: "Calle de San Andrés", img: Madrid32, orientation: "vertical" },
    { text: "Calle de Alcalá", img: Madrid16, orientation: "horizontal" },
    
    { text: "Puerta de Alcalá", img: Madrid17, orientation: "horizontal" },
    { text: "Café de la Plaza de San Pedro", img: Madrid49, orientation: "vertical" },
  
    { text: "Plaza de Colón", img: Madrid18, orientation: "horizontal" },
   
    { text: "Teatro Real", img: Madrid20, orientation: "horizontal" },

    { text: "Plaza de San Pedro", img: Madrid47, orientation: "vertical" },
    { text: "Café de la Opera", img: Madrid22, orientation: "horizontal" },
    { text: "Café de la Plaza de San Andrés", img: Madrid46, orientation: "vertical" },
    { text: "Plaza de la Opera", img: Madrid21, orientation: "horizontal" },

    { text: "Palacio Real", img: Madrid23, orientation: "horizontal" },
    { text: "Arco de Triunfo", img: Madrid24, orientation: "horizontal" },
    { text: "Calle de San Andrés", img: Madrid45, orientation: "vertical" },
  
    { text: "Cena en Malasaña", img: Madrid26, orientation: "horizontal" },
    
    { text: "Calle de Fuencarral", img: Madrid28, orientation: "horizontal" },
    { text: "Plaza de Dos de Mayo", img: Madrid27, orientation: "horizontal" },
  
    { text: "Plaza de la Luna", img: Madrid29, orientation: "horizontal" },
    { text: "Plaza de Tirso de Molina", img: Madrid33, orientation: "horizontal" },
    { text: "Mercado de San Antón", img: Madrid31, orientation: "horizontal" },
  
    { text: "Café del Mercado de Antón Martín", img: Madrid34, orientation: "horizontal" },
    { text: "Plaza del Humilladero", img: Madrid39, orientation: "vertical" },
    { text: "Mercado de Antón Martín", img: Madrid35, orientation: "horizontal" },
  
    { text: "Calle de Antón Martín", img: Madrid36, orientation: "horizontal" },
    { text: "Café del Mercado de la Cebada", img: Madrid40, orientation: "vertical" },
    { text: "Plaza de la Paja", img: Madrid37, orientation: "horizontal" },
  
    { text: "Café de la Plaza de la Paja", img: Madrid38, orientation: "horizontal" },
    { text: "Calle de la Cebada", img: Madrid42, orientation: "horizontal" },
    
    { text: "Mercado de la Cebada", img: Madrid41, orientation: "horizontal" },
    { text: "Plaza de la Latina", img: Madrid43, orientation: "horizontal" },
    
     
  ];
  
 

  export default function Madrid() {
    useEffect(() => {
      document.body.classList.add("madrid-page");
  
      return () => {
        document.body.classList.remove("madrid-page"); // Limpia la clase cuando salgas
      };
    }, []);
  
    return <Gallery items={items} title="Madrid Gallery" />;
  }
  