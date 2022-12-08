import React, { useReducer } from "react";
import { useState } from "react";

const Food = ({ order }) => {
  const [nameClient, setNameClient] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameClient);
  };

  return (
    <form id="orderData" onSubmit={handleSubmit}>
      <input id="dates" type="date"></input>
      <input id="hours" type="time"></input>
      <p id="nameClient">cliente</p>
      <input id="client" onChange={(e) => setNameClient(e.target.value)} />
      <p id="nameWaiter">Mesero</p>
      <input id="idWaiter"></input>
      
        {order.items.map((product) => (
          <div className= "food" key={product.item.name }>
            <p className="one">{product.item.name}</p>
            <input className="productOne" value={product.qty}></input>
            <button className="sum">+</button>
            <button className="trash"></button>
          </div>
        ))}
      

      <p id="result">Total$</p>
      <input id="resultSum"></input>
      <button id="delete">Borrar</button>
      <button id="send">Envío a cocina</button>
    </form>
  );
};
export default Food;
