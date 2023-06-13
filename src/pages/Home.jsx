import React, { useContext } from "react"
import { FavoritesContext } from "../componentes/FavoritesContext"
import fotos from "../datos/fotos.json"

const Home = () => {
const { favorites, addFavorites, removeFavorites } = useContext(FavoritesContext);

return (
  <div className="container pt-5 mt-5">
    <div className="row justify-content-center">
      {fotos.photos.map((foto) => (
        <div key={foto.id} className="card m-2 col-6 col-md-4 col-lg-3">
          <div className="row g-0">
            <div className="col-md-20">
              <img src={foto.src.tiny} className="img-thumbnail" alt={foto.alt} />
              <div className="card-body">
                <p className="card-text">{foto.alt}</p>
                
                <button
                  className= {`btn btn-${favorites.find((fav) => fav.id === foto.id) ? "danger" : "success" }`}
                  onClick={() =>
                    favorites.find((fav) => fav.id === foto.id)
                      ? removeFavorites(foto.id)
                      : addFavorites(foto)
                  }style={{ position:"absolute", top:"10px", right:"20px"}}
                >
                  {favorites.find((fav) => fav.id === foto.id) ? (
                    <i className="bi bi-heart"></i>
                  ) : (
                    <i className="bi bi-heart-fill"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
                  }


export default Home;
