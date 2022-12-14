import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <div className="col">
      <div className="card">
        <img src={product.image} alt="" className="imagen-card" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">USD ${product.price}</p>
          <Link to={`/product/${product.slug}`}>
                <a> <button className='btn btn-primary' >
                View product
            </button></a>
            </Link>
        </div>
      </div>
    </div>
  );
}