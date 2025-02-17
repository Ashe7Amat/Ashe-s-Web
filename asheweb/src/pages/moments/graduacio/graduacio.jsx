import	{React,useEffect} from 'react';

import Gallery from "../../../components/gallery/gallery"; 
                        
import graduacio1 from "../../../assets/images/moments/graduacio/gallery/graduacio1.jpg";
import graduacio2 from "../../../assets/images/moments/graduacio/gallery/graduacio2.jpg";
import graduacio3 from "../../../assets/images/moments/graduacio/gallery/graduacio3.jpg";
import graduacio4 from "../../../assets/images/moments/graduacio/gallery/graduacio4.jpg";
import graduacio5 from "../../../assets/images/moments/graduacio/gallery/graduacio5.jpg";
import graduacio6 from "../../../assets/images/moments/graduacio/gallery/graduacio6.jpg";
import graduacio7 from "../../../assets/images/moments/graduacio/gallery/graduacio7.jpg";
import graduacio8 from "../../../assets/images/moments/graduacio/gallery/graduacio8.jpg";
import graduacio9 from "../../../assets/images/moments/graduacio/gallery/graduacio9.jpg";
import graduacio10 from "../../../assets/images/moments/graduacio/gallery/graduacio10.jpg";
import graduacio11 from "../../../assets/images/moments/graduacio/gallery/graduacio11.jpg";
import graduacio12 from "../../../assets/images/moments/graduacio/gallery/graduacio12.jpg";
import graduacio13 from "../../../assets/images/moments/graduacio/gallery/graduacio13.jpg";
import graduacio14 from "../../../assets/images/moments/graduacio/gallery/graduacio14.jpg";
import graduacio15 from "../../../assets/images/moments/graduacio/gallery/graduacio15.jpg";
import graduacio16 from "../../../assets/images/moments/graduacio/gallery/graduacio16.jpg";
import graduacio17 from "../../../assets/images/moments/graduacio/gallery/graduacio17.jpg";
import graduacio18 from "../../../assets/images/moments/graduacio/gallery/graduacio18.jpg";
import graduacio19 from "../../../assets/images/moments/graduacio/gallery/graduacio19.jpg";
import graduacio20 from "../../../assets/images/moments/graduacio/gallery/graduacio20.jpg";
import graduacio21 from "../../../assets/images/moments/graduacio/gallery/graduacio21.jpg";
import graduacio22 from "../../../assets/images/moments/graduacio/gallery/graduacio22.jpg";
import graduacio23 from "../../../assets/images/moments/graduacio/gallery/graduacio23.jpg";
import graduacio24 from "../../../assets/images/moments/graduacio/gallery/graduacio24.jpg";
import graduacio25 from "../../../assets/images/moments/graduacio/gallery/graduacio25.jpg";
import graduacio26 from "../../../assets/images/moments/graduacio/gallery/graduacio26.jpg";
import graduacio27 from "../../../assets/images/moments/graduacio/gallery/graduacio27.jpg";
import graduacio28 from "../../../assets/images/moments/graduacio/gallery/graduacio28.jpg";
import graduacio29 from "../../../assets/images/moments/graduacio/gallery/graduacio29.jpg";
import graduacio30 from "../../../assets/images/moments/graduacio/gallery/graduacio30.jpg";
import graduacio31 from "../../../assets/images/moments/graduacio/gallery/graduacio31.jpg";
import graduacio32 from "../../../assets/images/moments/graduacio/gallery/graduacio32.jpg";
import graduacio33 from "../../../assets/images/moments/graduacio/gallery/graduacio33.jpg";
import graduacio34 from "../../../assets/images/moments/graduacio/gallery/graduacio34.jpg";
import graduacio35 from "../../../assets/images/moments/graduacio/gallery/graduacio35.jpg";
import graduacio36 from "../../../assets/images/moments/graduacio/gallery/graduacio36.jpg";
import graduacio37 from "../../../assets/images/moments/graduacio/gallery/graduacio37.jpg";
import graduacio38 from "../../../assets/images/moments/graduacio/gallery/graduacio38.jpg";
import graduacio39 from "../../../assets/images/moments/graduacio/gallery/graduacio39.jpg";
import graduacio40 from "../../../assets/images/moments/graduacio/gallery/graduacio40.jpg";
import graduacio41 from "../../../assets/images/moments/graduacio/gallery/graduacio41.jpg";
import graduacio42 from "../../../assets/images/moments/graduacio/gallery/graduacio42.jpg";
import graduacio43 from "../../../assets/images/moments/graduacio/gallery/graduacio43.jpg";
import graduacio44 from "../../../assets/images/moments/graduacio/gallery/graduacio44.jpg";
import graduacio45 from "../../../assets/images/moments/graduacio/gallery/graduacio45.jpg";
import graduacio46 from "../../../assets/images/moments/graduacio/gallery/graduacio46.jpg";
import graduacio47 from "../../../assets/images/moments/graduacio/gallery/graduacio47.jpg";
import graduacio48 from "../../../assets/images/moments/graduacio/gallery/graduacio48.jpg";

const items = [
    { text: "graduacio", img: graduacio1, orientation: "vertical" },
    { text: "graduacio 2", img: graduacio2, orientation: "horizontal" },
    { text: "graduacio 3", img: graduacio3, orientation: "horizontal" },
    { text: "graduacio 4", img: graduacio4, orientation: "horizontal" },
    { text: "graduacio 5", img: graduacio5, orientation: "horizontal" },
    { text: "graduacio 6", img: graduacio6, orientation: "horizontal" },
    { text: "graduacio 7", img: graduacio7, orientation: "horizontal" },
    { text: "graduacio 8", img: graduacio8, orientation: "horizontal" },
    { text: "graduacio 9", img: graduacio9, orientation: "horizontal" },
    { text: "graduacio 10", img: graduacio10, orientation: "horizontal" },
    { text: "graduacio 11", img: graduacio11, orientation: "vertical" },
    { text: "graduacio 31", img: graduacio31, orientation: "horizontal" },
    { text: "graduacio 12", img: graduacio12, orientation: "horizontal" },
    { text: "graduacio 13", img: graduacio13, orientation: "horizontal" },
    { text: "graduacio 14", img: graduacio14, orientation: "horizontal" },
    { text: "graduacio 15", img: graduacio15, orientation: "horizontal" },
    { text: "graduacio 16", img: graduacio16, orientation: "horizontal" },
    { text: "graduacio 17", img: graduacio17, orientation: "horizontal" },
    { text: "graduacio 18", img: graduacio18, orientation: "horizontal" },
    { text: "graduacio 19", img: graduacio19, orientation: "horizontal" },
    { text: "graduacio 20", img: graduacio20, orientation: "vertical" },
    { text: "graduacio 21", img: graduacio21, orientation: "horizontal" },
    { text: "graduacio 22", img: graduacio22, orientation: "horizontal" },
    { text: "graduacio 23", img: graduacio23, orientation: "horizontal" },
    { text: "graduacio 24", img: graduacio24, orientation: "horizontal" },
    { text: "graduacio 25", img: graduacio25, orientation: "horizontal" },
    { text: "graduacio 26", img: graduacio26, orientation: "horizontal" },
    { text: "graduacio 27", img: graduacio27, orientation: "horizontal" },
    { text: "graduacio 28", img: graduacio28, orientation: "horizontal" },
    { text: "graduacio 29", img: graduacio29, orientation: "horizontal" },
    { text: "graduacio 30", img: graduacio30, orientation: "horizontal" },
    
    { text: "graduacio 32", img: graduacio32, orientation: "horizontal" },
    { text: "graduacio 33", img: graduacio33, orientation: "horizontal" },
    { text: "graduacio 34", img: graduacio34, orientation: "horizontal" },
    { text: "graduacio 35", img: graduacio35, orientation: "vertical" },
    { text: "graduacio 36", img: graduacio36, orientation: "vertical" },
    { text: "graduacio 37", img: graduacio37, orientation: "horizontal" },
    { text: "graduacio 38", img: graduacio38, orientation: "horizontal" },
    { text: "graduacio 43", img: graduacio43, orientation: "horizontal" },
    { text: "graduacio 39", img: graduacio39, orientation: "horizontal" },
    { text: "graduacio 40", img: graduacio40, orientation: "horizontal" },
    { text: "graduacio 41", img: graduacio41, orientation: "vertical" },
    { text: "graduacio 42", img: graduacio42, orientation: "horizontal" },
   
    { text: "graduacio 44", img: graduacio44, orientation: "horizontal" },
    { text: "graduacio 45", img: graduacio45, orientation: "horizontal" },
    { text: "graduacio 46", img: graduacio46, orientation: "horizontal" },
    { text: "graduacio 47", img: graduacio47, orientation: "horizontal" },
    { text: "graduacio 48", img: graduacio48, orientation: "horizontal" },
];
export default function Graduacio() {
    useEffect(() => {
      document.body.classList.add("graduacio-page");
  
      return () => {
        document.body.classList.remove("graduacio-page"); // Limpia la clase cuando salgas
      };
    }, []);
  
    return <Gallery items={items} title="Graduacio Gallery" />;
  }