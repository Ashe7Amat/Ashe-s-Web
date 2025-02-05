import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import './moments.css';


// Importa imágenes
import PortadaMadrid from '../../assets/images/moments/madriz/portada/PortadaMadrid.JPG';
import PortadaMilan from '../../assets/images/moments/Milan/portada/PortadaMilan.JPG';
import PortadaLost from '../../assets/images/moments/Lost/portada/PortadaLost.JPG';

const albums = [
  {
    id: 1,
    title: "Milan",
    year: 2023,
    image: PortadaMilan,
    link: "/moments/Milan",
  },
  {
    id: 2,
    title: "Taga",
    year: 2023,
    image: PortadaLost,
    link: "/moments/Lost",
  },
  {
    id: 3,
    title: "Madriz",
    year: 2021,
    image: PortadaMadrid,
    link: "/moments/madrid",
  },
];

export default function Moments() {
  return (
    <div className="moments-container">
      <h1>Albums</h1>
      <div className="albums-grid">
        {albums.map((album) => (
          <Link key={album.id} to={album.link} className="album-card">
            <img src={album.image} alt={album.title} className="album-image" />
            <div className="album-details">
              <h2>{album.title}</h2>
              <p>{album.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
