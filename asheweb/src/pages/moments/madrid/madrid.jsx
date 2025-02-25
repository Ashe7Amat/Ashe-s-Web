import { React, useEffect, useState } from 'react';
import Gallery from "../../../components/gallery/gallery";

export default function Madrid() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/media/madrid');
        const data = await response.json();
        const formattedItems = data.map(item => ({
          text: item.title,
          img: `http://localhost:5000/api/media/image/${item.id}`,
          orientation: item.orientation
        }));
        setItems(formattedItems);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
    document.body.classList.add("madrid-page");

    return () => {
      document.body.classList.remove("madrid-page");
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Gallery items={items} title="Madrid Gallery" />;
}