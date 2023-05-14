import React from 'react';

//Boostrap-react módulos
import {RxPlus} from "react-icons/rx";
import {RiSubtractFill} from "react-icons/ri";

//Estilos
import "./ItemCount.css"

export const ItemCount = ({max, amount, modify}) => {

    const sumar = () =>{
        if (amount < max){
            modify( amount +1)
        }
    }
    const restar = () =>{
        if (amount>0) {
            modify( amount -1)
        }
        else{alert("la cantidad no puede ser menor a cero")}
    }
    
    return (
        <>        
        <div className='itemcount-btn'>
            <div className='itemcount-btn-left'>
                <button onClick = {restar}><h3><RiSubtractFill/></h3></button>
                <h4>{amount}</h4>
                <button onClick = {sumar}><h3><RxPlus /></h3></button>
            </div>
        </div>
        </>
    )
}

export default ItemCount