import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Prodotti = () => {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setProdotti(resp.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="mb-4">Prodotti</h1>

        <div className="row">
          {prodotti.map((prodotto) => (
            <div className="col-md-3 mb-4" key={prodotto.id}>
              <div className="card h-100">
                <img
                  src={prodotto.image}
                  className="card-img-top p-3"
                  alt={prodotto.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{prodotto.title}</h5>
                  <p className="card-text text-truncate">{prodotto.description}</p>
                  <p className="fw-bold mt-auto">€ {prodotto.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Prodotti;
