import React from "react";

const Menu=(props)=>{
    return(
        <div>
        <button className="breakfasts" onClick={function(){
            props.setSelectedProducType('Desayuno');
          }}>
            Desayunos
          </button>
          <button className="lunches" onClick={function(){
            props.setSelectedProducType('Almuerzo');
          }}>
            Almuerzos
          </button>
        
        </div>
    )
}
export default Menu;