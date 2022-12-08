import React from "react";
import ItemListContainer from "./ItemListContainer";
import data from "../utils/Data.jsx";


export default function ProductItem({ product }) {
  return (
    <div>
      <h2 className="text-center mt-5 mb-5">Productos Apple</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {data.products.map((product) => (
            <ItemListContainer key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
