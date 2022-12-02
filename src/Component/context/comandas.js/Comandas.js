import React from "react";
import { useEffect, useState } from "react";

const Comandas = ({ selectedProductType }) => {
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
  console.log(products);
  return (
    <div className="allLunch">
      {selectedProductType === "Desayuno"
        ? products.map((product) => (
            <p key={product.id} className="nameLunch">
              {product.name}
              <span>{product.price}</span>
              <img className="pequeña" src={product.image} />
            </p>
          ))
        : null}
      {selectedProductType === "Almuerzo"
        ? lunch.map((lunch) => (
            <p key={lunch.id} className="Lunchs">
              {lunch.name}
              <span>{lunch.price}</span>
              <img className="pequeña" src={lunch.image} />
            </p>
          ))
        : null}
    </div>
  );
};
export default Comandas;
