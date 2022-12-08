import React from "react";
import { useParams } from "react-router-dom";
import data from "../utils/Data";

export default function ProductDetail() {
  let { slug } = useParams();
  let product = data.products.find((x) => x.slug === slug);

  return (
    <div>
      <h2 className="text-center mt-5 mb-5">Single Product</h2>
      <div className="container">
        <div className="card mb-3 maximo-card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-title">Price: {product.price}$</p>
                <p className="card-title">Category: {product.category}</p>
                <p className="card-text">Description:{product.description}</p>
                <p>{product.countInStock > 0 ? "In stock" : "Unavailable"}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
