import React from "react";
import { useEffect, useState } from "react";

const Comandas = ({ selectedProductType, handleAddItem }) => {
  const [products, setProducts] = useState([]);
  const [lunch, setLunch] = useState([]);

  useEffect(() => {
    fetch(`https://63799c1e7eb4705cf282218b.mockapi.io/products?type=Desayuno`)
      .then((response) => response.json())
      .then((allProducts) => setProducts(allProducts));
    //aquí
    fetch(`https://63799c1e7eb4705cf282218b.mockapi.io/products?type=Almuerzo`)
      .then((response) => response.json())
      .then((allLunch) => setLunch(allLunch));
  }, []);

  return (
    <div className="allLunch">
      {selectedProductType === "Desayuno"
        ? products.map((product) => (
            <button
              className="nameLunch"
              onClick={() => {
                handleAddItem(product);
              }}
            >
              <p>
                {product.name}
                <span>${product.price}</span>
                <img className="pequeña" src={product.image} alt=""/>
              </p>
            </button>
          ))
        : null}
      {selectedProductType === "Almuerzo"
        ? lunch.map((lunch) => (
            <button
              className="Lunchs"
              onClick={() => {
                handleAddItem(lunch);
              }}
              key={lunch.id}
            >
              <p>
                {lunch.name}
                <span>${lunch.price}</span>
                <img className="pequeña" src={lunch.image} alt=""/>
              </p>
            </button>
          ))
        : null}
    </div>
  );
};
export default Comandas;
