import React, { useState } from 'react';

//Estilos
import "./ItemCount.css"

//Modulos
import {RxPlus} from "react-icons/rx";
import {RiSubtractFill} from "react-icons/ri";



export const ItemCount = () => {

    const [counter, setCounter] = useState(1);

    const sumar = () =>{
        setCounter( counter +1)
    }
    const restar = () =>{
        if (counter>0) {
            setCounter( counter -1)
        }
        else{alert("la cantidad no puede ser menor a cero")}
    }
    /* const addOn = () =>{
        if (stock > 0) {
            //devolver la adicion al carrito
        }
    } */

    return (
        <>        
        <div className='itemcount-btn'>
            <div className='itemcount-btn-left'>
                <button onClick = {restar}><h3><RiSubtractFill/></h3></button>
                <h4>{counter}</h4>
                <button onClick = {sumar}><h3><RxPlus /></h3></button>
            </div>
           {/*  <div className='itemcount-btn-right'>
                <button onClick ={addOn}>Agregar al carrito</button>
            </div> */}
        </div>
        </>
    )
}

export default ItemCount