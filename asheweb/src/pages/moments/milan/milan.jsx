import	{React,useEffect} from 'react';

import Gallery from "../../../components/gallery/gallery"; 

import milna1 from "../../../assets/images/moments/Milan/gallery/milna1.JPG";
import milna2 from "../../../assets/images/moments/Milan/gallery/milna2.JPG";
import milna3 from "../../../assets/images/moments/Milan/gallery/milna3.JPG";
import milna4 from "../../../assets/images/moments/Milan/gallery/milna4.JPG";
import milna5 from "../../../assets/images/moments/Milan/gallery/milna5.JPG";
import milna6 from "../../../assets/images/moments/Milan/gallery/milna6.JPG";
import milna7 from "../../../assets/images/moments/Milan/gallery/milna7.JPG";
import milna8 from "../../../assets/images/moments/Milan/gallery/milna8.JPG";
import milna9 from "../../../assets/images/moments/Milan/gallery/milna9.JPG";
import milna10 from "../../../assets/images/moments/Milan/gallery/milna10.JPG";
import milna11 from "../../../assets/images/moments/Milan/gallery/milna11.JPG";
import milna12 from "../../../assets/images/moments/Milan/gallery/milna12.JPG";
import milna13 from "../../../assets/images/moments/Milan/gallery/milna13.JPG";
import milna14 from "../../../assets/images/moments/Milan/gallery/milna14.JPG";
import milna15 from "../../../assets/images/moments/Milan/gallery/milna15.JPG";
import milna16 from "../../../assets/images/moments/Milan/gallery/milna16.JPG";
import milna17 from "../../../assets/images/moments/Milan/gallery/milna17.JPG";
import milna18 from "../../../assets/images/moments/Milan/gallery/milna18.JPG";
import milna19 from "../../../assets/images/moments/Milan/gallery/milna19.JPG";
import milna20 from "../../../assets/images/moments/Milan/gallery/milna20.JPG";
import milna21 from "../../../assets/images/moments/Milan/gallery/milna21.JPG";
import milna22 from "../../../assets/images/moments/Milan/gallery/milna22.JPG";
import milna23 from "../../../assets/images/moments/Milan/gallery/milna23.JPG";
import milna24 from "../../../assets/images/moments/Milan/gallery/minla24.JPG";
import milna25 from "../../../assets/images/moments/Milan/gallery/minla25.JPG";
import milna26 from "../../../assets/images/moments/Milan/gallery/minla26.JPG";
import milna27 from "../../../assets/images/moments/Milan/gallery/milna27.JPG";

const items = [
  { text: "Estacione centrale di Milano", img: milna1, orientation: "horizontal" },
  { text: "Galería Vittorio Emanuele II", img: milna2, orientation: "horizontal" },
  { text: "Naviglio Pavese", img: milna26, orientation: "vertical" }, 
  { text: "L'appartamento", img: milna4, orientation: "vertical" },
  { text: "La cucina di Mati", img: milna3, orientation: "horizontal" },
  { text: "Viste dell'appartamento", img: milna5, orientation: "horizontal" },
  { text: "Lungo il ponte", img: milna6, orientation: "horizontal" },
  { text: "Le proprie strade", img: milna7, orientation: "vertical" },
  { text: "Le posate più costose", img: milna8, orientation: "horizontal" },
  { text: "Da film", img: milna10, orientation: "horizontal" },
  { text: "Pronto per vivere", img: milna11, orientation: "horizontal" },
  { text: "Semplicità", img: milna9, orientation: "vertical" },
  { text: "Foto stupenda", img: milna12, orientation: "vertical" },
  { text: "Solo vegetación", img: milna13, orientation: "horizontal" },
  { text: "Coppia italiana", img: milna14, orientation: "horizontal" },
  { text: "Il momento migliore", img: milna16, orientation: "horizontal" },
  { text: "Lago di Como", img: milna15, orientation: "vertical" },
  { text: "Lago di Como 2", img: milna17, orientation: "horizontal" },
  { text: "Lottatori di Dio", img: milna18, orientation: "horizontal" },
  { text: "Le migliori viste d'Italia", img: milna20, orientation: "horizontal" },
  { text: "Vespa in Italia", img: milna19, orientation: "vertical" },
  { text: "Tecnologie ecologiche", img: milna21, orientation: "horizontal" },
  { text: "Un giorno...", img: milna25, orientation: "vertical" },
  { text: "Solo per strada", img: milna22, orientation: "horizontal" },
  { text: "Ricchi del mondo", img: milna23, orientation: "horizontal" },
  { text: "Riservatezza", img: milna24, orientation: "vertical" },
  { text: "Semplice", img: milna27, orientation: "horizontal" },
];

export default function Milan() {
    useEffect(() => {
      document.body.classList.add("milan-page");
  
      return () => {
        document.body.classList.remove("milan-page"); // Limpia la clase cuando salgas
      };
    }, []);
  
    return <Gallery items={items} title="Milan Gallery" />;
  }
