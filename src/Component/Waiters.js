import React, { useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import Menu from "./context/menu";
import Comandas from "./context/comandas.js/Comandas";
import Food from "./context/comandas.js/Orders";

const Waiters = () => {
  const [selectedProductType, setSelectedProducType] = useState("Desayuno");
  const [order, setOrder] = useState({
    client: "",
    date: "",
    time: "",
    items: [],
  });
  const handleAddItem = (item) => {
    setOrder({ ...order, items: [...order.items, {item:item, qty:0}] });
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
            <Food order={order} />
          </section>
        </div>
      </div>
    </div>
  );
};
export default Waiters;
