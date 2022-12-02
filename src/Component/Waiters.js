import React,{useState} from "react";
import { VscChevronLeft, VscChevronRight}  from "react-icons/vsc";
import Menu from "./context/menu";
import Comandas from "./context/comandas.js/Comandas";
import Orders from "./context/comandas.js/Orders";

const Waiters= () => {

  const [selectedProductType, setSelectedProducType] = useState('Desayuno');

    return (
        <div className="flex-box">
        <div className="main">
          <VscChevronLeft/>
          <VscChevronRight id="right"/>
          <h1 className="burgerTitle">Burger Queen </h1>
          <Menu setSelectedProducType={setSelectedProducType}/>
         <div className="breakfast menu">
            <section id="lunch">
              <Comandas selectedProductType={selectedProductType}/>
              <Orders/>
              
            </section>   
         


          </div>
          
        </div>
      </div>
    );
}
export default Waiters;