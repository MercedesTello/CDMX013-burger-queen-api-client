import React, { useEffect } from "react";
import { useState } from "react";

const Food = ({ order, setOrder }) => {
  const [nameClient, setNameClient] = useState("");

  const [pedido, setPedido] = useState({
    cliente: "",
    products: [],
  });

  const handleSubmit = async() => {

    // setOrder((prevOrder)=>({ ...prevOrder, client: nameClient}));// Lu
    // console.log(nameClient);

    // const data = { titulo: "cosa", borrar: "borrarme" };

    //   console.log('ORDER TO POST:::', order);

    //   console.log('el cliente ', nameClient)
    //   console.log('la che orden ', order.items)

    //   console.log({
    //     client: nameClient,
    //     products: order.items,
    //     status: "cooking",
    // })
    const config = {
      method: "POST",
      body: JSON.stringify({
        name:'yo',
        cosa: 'm',
      }),
    };

    await fetch("https://63799c1e7eb4705cf282218b.mockapi.io/ejemplo",config)
    
    //   method: "POST",
    //   // body: JSON.stringify(data),
    //   body: JSON.stringify({
    //     client: nameClient,
    //     products: order.items,
    //     // status: "cooking",
    //   }),
    // }).then((response) => response.json());
    // // .then((data) => console.log(data)));
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  function handleAdd(productOne) {
    setOrder((previousOrder) => {
      const newOrder = previousOrder.items.map((product) => {
        if (product.id === productOne.id) {
          return {
            ...product,
            qty: product.qty + 1,
            priceItemOrder: product.price * (product.qty + 1),
          };
        } else {
          return {
            ...product,
          };
        }
      });
      return {
        ...previousOrder,
        items: newOrder,
      };
    });
  }

  useEffect(() => {}, [order]);

  const handleDelete = (item) => {
    setOrder((previousOrder) => {
      const filterOrder = order.items.filter((product) => product.id !== item);
      return {
        ...previousOrder,
        items: filterOrder,
      };
    });
  };

  const totalPrice = () => {
    return order.items.reduce((accumulator, currentItem) => {
      return accumulator + parseInt(currentItem.priceItemOrder);
    }, 0);
  };

  return (
    <form id="orderData">
      {/* onSubmit={handleSubmit} */}
      <p id="dates">{date}</p>
      <p id="hours">{time}</p>
      <p id="nameClient">cliente</p>
      <input id="client" onChange={(e) => setNameClient(e.target.value)} />
      <p id="nameWaiter">Mesero</p>
      <input id="idWaiter"></input>

      {order.items.map((product) => (
        <div className="food" key={product.id}>
          <p className="one">{product.name}</p>
          <p className="price">${product.priceItemOrder}</p>

          <input
            className="productOne"
            value={product.qty}
            onChange={(e) => {}}
          ></input>
          <button className="sum" onClick={() => handleAdd(product)}>
            +
          </button>
          <button
            className="trash"
            onClick={() => handleDelete(product.id)}
          ></button>
          <p id="result">Total$</p>
          <p id="resultSum">$ {totalPrice()}</p>
          <button id="delete">Borrar</button>
          <button id="send" onClick={()=> handleSubmit()}>
            Envío a cocina
          </button>
        </div>
      ))}
    </form>
  );
};

export default Food;
