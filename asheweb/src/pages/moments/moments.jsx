import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './moments.css';

// Importa imágenes
import PortadaMadrid from '../../assets/images/moments/madriz/portada/PortadaMadrid.JPG';
import PortadaMilan from '../../assets/images/moments/Milan/portada/PortadaMilan4.JPG';
import PortadaLost from '../../assets/images/moments/Lost/portada/PortadaLost.JPG';
import Portada2025 from '../../assets/images/moments/2025/portada/portada2025.jpg';
import Portada2024 from '../../assets/images/moments/2024/portada/portada2024.JPG';
import Graduacio from '../../assets/images/moments/graduacio/portada/portadaGradu.JPG'

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
  {
    id: 4,
    title: "2025",
    year: 2025,
    image: Portada2025,
    link: "/moments/2025",
  },
  {
    id: 5,
    title: "2024",
    year: 2024,
    image: Portada2024,
    link: "/moments/2024",
  },
  {
    id: 6,
    title: "Graduacio ",
    year: 2023,
    image: Graduacio,
    link: "/moments/graduacio",
  },
];

export default function Moments() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [sortBy, setSortBy] = useState('year');

  const sortedAlbums = albums.sort((a, b) => {
    if (sortBy === 'year') {
      return b.year - a.year;
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <div className="moments-container">
      <h1>Albums</h1>
      <div className="sort">
        <label>
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="year">Year</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>
      <div className="albums-grid">
        {sortedAlbums.map((album) => (
          <Link
            key={album.id}
            to={album.link}
            className={`album-card ${hoveredCard === album.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(album.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-bg" style={{ backgroundImage: `url(${album.image})` }}></div>
            <div className="card">
              <div className="card-info">
                <h2>{album.title}</h2>
                <p>{album.year}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

