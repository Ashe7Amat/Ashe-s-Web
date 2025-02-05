import { useState, useEffect, useMemo, useRef } from 'react';
import './masonry.css';

function Masonry({ data }) {
  const [columns, setColumns] = useState(2);
  const [width, setWidth] = useState(0);
  const ref = useRef();

  // Actualiza el número de columnas según el ancho de la ventana
  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia('(min-width: 1500px)').matches) {
        setColumns(5);
      } else if (window.matchMedia('(min-width: 1000px)').matches) {
        setColumns(4);
      } else if (window.matchMedia('(min-width: 600px)').matches) {
        setColumns(3);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Actualiza el ancho del contenedor
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gap = 10; // Espacio entre imágenes
  const columnWidth = (width - (columns - 1) * gap) / columns;

  // Cálculo de posiciones y tamaños para cada elemento
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = data.map((child) => {
      // Se asigna el elemento a la columna con menor altura acumulada
      const column = heights.indexOf(Math.min(...heights));
      const x = columnWidth * column + gap * column;
      const y = (heights[column] += child.height / 2 + gap) - child.height / 2;
      return {
        ...child,
        x,
        y,
        width: columnWidth,
        height: child.height / 2,
      };
    });
    return [heights, gridItems];
  }, [columns, data, width]);

  return (
    <div
      ref={ref}
      className="masonry"
      style={{ position: 'relative', height: Math.max(...heights) }}
    >
      {gridItems.map((item) => (
        <div
          key={item.id}
          style={{
            position: 'absolute',
            left: item.x,
            top: item.y,
            width: item.width,
            height: item.height,
          }}
        >
          {/* Si el recurso es un mp4 se renderiza un video con autoplay, muted y loop */}
          {item.image && item.image.toLowerCase().endsWith('.mp4') ? (
            <video
              src={item.image}
              autoPlay
              muted
              loop
              style={{
                backgroundColor: '#000',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <div
              style={{
                backgroundColor: '#ffffff',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Masonry;
