import React, { useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import Menu from "./context/menu";
import Comandas from "./context/comandas.js/Comandas";
import Food from "./context/comandas.js/Food";

const Waiters = () => {
  const [selectedProductType, setSelectedProducType] = useState("Desayuno");
  const [order, setOrder] = useState({
    client: "",
    date: "",
    time: "",
    items: [],
  });
  const handleAddItem = (item) => {
    // 1. Verificar si el producto ya fue agregado a la orden

    const productFinded = order.items.find((product) => product.id === item.id);

    if (productFinded) {
      // 2b Si el producto ya esta en la orden - le sumamos 1 a su qty

      setOrder((previousOrder) => {
        const newOrder = previousOrder.items.map((element) => {
          if (productFinded.id === element.id) {
            return {
              ...element,
              qty: element.qty + 1,
            };
          }else {
            return {
              ...element}
          }

        });

        return {
          ...previousOrder,
          items: newOrder,
        };
      });
    } else {
      // 2a Si el producto no esta en la orden - lo agregamos con qty 1
      setOrder((previousOrder) => {
        return {
          ...previousOrder,
          items: [...previousOrder.items, { ...item, qty: 1, priceItemOrder: item.price }],
        };
      });
    }
  };
  


  return (
    <div className="flex-box">
      <div className="main">
        <VscChevronLeft />
        <VscChevronRight id="right" />
        <h1 className="burgerTitle">Burger Queen </h1>

        <Menu setSelectedProducType={setSelectedProducType} />
        <div className="breakfast menu">
          <section id="lunch">
            <Comandas
              selectedProductType={selectedProductType}
              handleAddItem={handleAddItem}
            />
            <Food order={order} setOrder={setOrder} />
          </section>
        </div>
      </div>
    </div>
  );
};
export default Waiters;
