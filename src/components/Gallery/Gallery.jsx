import React from "react";
import "./Gallery.scss";
import { useState } from "react";


const Gallery = ({ galleryData }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = galleryData.length;
  console.log("hola");

  const nextImage = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  if (!Array.isArray(galleryData) || galleryData.length <= 0) {
    return null;
  }

  return (
    <div className="gallery">
      <div className="gallery-header">
        <h1 className="gallery-header_title">Galería de Imágenes</h1>
        <h2 className="gallery-header_subtitle">Ediciones anteriores</h2>
      </div>
      <div className="gallery-nav">
        <button className="gallery-nav_btn" onClick={prevImage}>
          Anterior
        </button>
        <button className="gallery-nav_btn" onClick={nextImage}>
          Siguiente
        </button>
      </div>
      {galleryData.map((choice, index) => {
        return (
          <div
            className={index === currentImage ? "slide active" : "slide"}
            key={index}
          >
            {index === currentImage && (
              <img
                src={choice.image}
                alt="imagen edicion anterior"
                className="gallery-img"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
