import React from 'react';

//Estilos
import "./ItemCount.css"

//Modulos
import {RxPlus} from "react-icons/rx";
import {RiSubtractFill} from "react-icons/ri";



export const ItemCount = ({max, amount, modify}) => {

    /* const [counter, setCounter] = useState(1); */
    //El trabajo del hook UseState lo hemos reemplazado con las props max, amount y modify
    //max hace referencia al stock, amount reemplaza a counter y modify a setCounter
    //estas props son las que usamos en itemDetail
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
           {/*  <div className='itemcount-btn-right'>
                <button onClick ={addOn}>Agregar al carrito</button>
            </div> */}
        </div>
        </>
    )
}

export default ItemCount