import * as React from "react";
import { useState, useEffect } from "react";
import Masonry from '../../components/react-bits/masonry/masonry.jsx';
import './inici.css'; // Importa el archivo CSS
import { Link } from "react-router-dom";

// data1
import barbacue from '../../assets/images/inici/data1/barbarc.JPG';
import brjo from '../../assets/images/inici/data1/brjo.JPG';
import algo3 from '../../assets/images/inici/data1/algo3.JPG';
import bar from '../../assets/images/inici/data1/bar.JPG';
import glass from '../../assets/images/inici/data2/gafas.mp4';
import mee from '../../assets/images/inici/data1/mee.JPG';
// data2
import animat from '../../assets/images/inici/data2/animat.gif';
import apolo from '../../assets/images/inici/data2/video1.MP4';
import brunosof from '../../assets/images/inici/data2/brunosof.JPG';
import ikerplaya from '../../assets/images/inici/data2/ikerplaya.JPG';
import mar from '../../assets/images/inici/data2/mar.JPG';
import martierra from '../../assets/images/inici/data2/martierra.JPG';
import mertins from '../../assets/images/inici/data2/mertins.JPG';
import rekeelias from '../../assets/images/inici/data2/rekeelias.JPG';
import video2 from '../../assets/images/inici/data2/video2.MP4';
import videorut from '../../assets/images/inici/data2/videorut.MP4';
import fest from '../../assets/images/inici/data2/fest.JPG';
import hobbit from '../../assets/images/inici/data2/hobbit.JPG';
import Madr from '../../assets/images/inici/data2/MADR.JPG';
import sofcu from '../../assets/images/inici/data2/sofcu.JPG';

const data = [
  { id: 1, image: mee, height: 600 },
  { id: 2, image: brjo, height: 300 },
  { id: 3, image: algo3, height: 600 },
  { id: 4, image: bar, height: 400 },
  { id: 5, image: glass, height: 400 },
  { id: 6, image: barbacue, height: 500 },
  { id: 7, image: ikerplaya, height: 400 },
  { id: 8, image: videorut, height: 600 },
  { id: 9, image: sofcu, height: 350 },
  { id: 10, image: Madr, height: 350 }
  
];

const data2 = [
  { id: 1, image: animat, height: 600 },
  { id: 2, image: mar, height: 900 },
  { id: 3, image: apolo, height: 600 },
  { id: 4, image: brunosof, height: 600 },
  { id: 5, image: hobbit, height: 900 },
  { id: 6, image: rekeelias, height: 400 },
  { id: 7, image: mertins, height: 500 },
  { id: 8, image: video2, height: 600 },
  { id: 9, image: fest, height: 400 },
  { id: 10, image: martierra, height: 400 }
];

export default function Inici() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const elements = [...data, ...data2].map((item) => {
      return new Promise((resolve) => {
        if (item.image.endsWith(".MP4") || item.image.endsWith(".mp4")) {
          const video = document.createElement("video");
          video.src = item.image;
          video.onloadeddata = resolve;
          video.onerror = resolve;
        } else {
          const img = new Image();
          img.src = item.image;
          img.onload = resolve;
          img.onerror = resolve;
        }
      });
    });

    Promise.all(elements).then(() => {
      setIsLoading(false); // Solo se oculta cuando todo está cargado
    });
  }, []);

  return (
    <div className="inici-container">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="masonry-container">
            <Masonry data={data} />
          </div>

          <section className="inici-texto">
            <h1>Welcome to My Portfolio</h1>
            <p>Discover my collection of images and videos that capture special moments.</p>
            <Link to="/moments">
              <button className="inici-boton">See More</button>
            </Link>
          </section>

          <div className="masonry-container">
            <Masonry data={data2} />
          </div>
        </>
      )}
    </div>
  );
}
