import React, { useContext } from 'react';
import { FavoritesContext } from '../componentes/FavoritesContext';

const Favoritos = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className='mt-5 pt-5'>
      <div className="container relative pt-5 mt-5 row justify-content-center">
        {favorites.length > 0 ? (
          favorites.map((foto) => (
            <div key={foto.id} className="card m-2 col-3">
              <div className="row g-0 justify-content-center">
                <div className="col-md-20">
                  <img src={foto.src.tiny} className="img-thumbnail" alt={foto.alt} />
                  <div className="card-body">
                    
                    <p className="card-text">{foto.alt}</p>
                    <i className="bi bi-heart-fill" style={{ position:"absolute", top:"0px", right:"20px", fontSize: '24px', color: 'red' }}></i>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h1>No hay fotos favoritas</h1>
            <i className="bi bi-heart-fill" style={{ fontSize: '48px', color: 'red' }}></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favoritos;