// Modal.js
import React from 'react';
import './Modal.css';

function Modal({ film, closeModal }) {
  const posterUrl = film.poster_path
    ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image+Available";

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>X</button>
        <img src={posterUrl} alt={`Poster de ${film.title}`} />
        <h2>{film.title}</h2>
        <p>{film.overview}</p>
      </div>
    </div>
  );
}

export default Modal;
