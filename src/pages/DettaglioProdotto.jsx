import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const DettaglioProdotto = () => {
  const { id } = useParams();
  const [prodotto, setProdotto] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
      setProdotto(resp.data);
    });
  }, [id]);

  return (
    <div className="container mt-4">
      {prodotto ? (
        <div className="card shadow">
          <div className="row g-0">
            <div className="col-md-5 d-flex align-items-center justify-content-center p-3">
              <img
                src={prodotto.image}
                alt={prodotto.title}
                className="img-fluid prodotto-img"
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h1 className="card-title mb-3">{prodotto.title}</h1>
                <p className="text-muted">Categoria: {prodotto.category}</p>
                <p className="card-text">{prodotto.description}</p>
                <h3 className="text-success fw-bold mb-4">€ {prodotto.price}</h3>
                <Link to="/prodotti" className="btn btn-warning fw-bold">
                  Torna ai prodotti
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center mt-4">Loading...</p>
      )}
    </div>
  );
};

export default DettaglioProdotto;
