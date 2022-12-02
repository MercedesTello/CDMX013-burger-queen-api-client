import React from "react";
import { VscTrash,VscAdd } from "react-icons/vsc";
const Orders =()=>{

    return(
        <form id="orderData"onSubmit={(e) => {}}>
                <button id="dates">01-01-2023</button>
                <button id="hours">10:00:05</button>
                <h3 id="nameClient">cliente</h3>
                <input id="client"></input>
                <h3 id="idWaiter">Id-Empleado</h3>
                <input id="waiter"></input>
                <h3 id="one">producto1</h3>
                <input id="productOne"></input>
                <input id="sum"></input>
                <VscAdd id="increment"/>
                <VscTrash id="trash"/>
                <span id="result">Total$</span>
                <input id="resultSum"></input>
                <button id="delete">Borrar</button>
                <button id="send">Envío a cocina</button>

              </form>
    )
}
export default Orders;