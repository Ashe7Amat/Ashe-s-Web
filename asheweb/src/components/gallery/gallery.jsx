import React, { useState, useEffect } from "react";
import "./gallery.css";

export default function Gallery({ items, title = "My Gallery" }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImageIndex(null);
  };

  // Función para manejar las teclas de flecha
  const handleKeyDown = (event) => {
    if (!modalOpen) return; // Solo manejar las teclas cuando el modal está abierto
    if (event.key === "ArrowLeft") {
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
    } else if (event.key === "ArrowRight") {
      setCurrentImageIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
    }
  };

  useEffect(() => {
    // Agregar evento para escuchar teclas
    window.addEventListener("keydown", handleKeyDown);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]); // Solo se ejecutará cuando el modal esté abierto

  return (
    <div className="gallery-container">
      <h1>{title}</h1>
     
      <div
        className={`grid ${items.length >= 47 ? "grid--large" : "grid--center" }`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${
              item.orientation === "horizontal" ? "item--horizontal" : "item--vertical"
            }`}
            onClick={() => openModal(index)}
          >
            <img src={item.img} alt={item.text} />
            <div className="item__details">{item.text}</div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={items[currentImageIndex].img} alt="Expanded" />
          </div>
        </div>
      )}
    </div>
  );
}
