import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
//Modulos
import PullProducts from "../../helpers/PullProducts"
import ItemDetail from "../itemDetail/ItemDetail"
import {ImSpinner6} from "react-icons/im"

//Estilos
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {


    const [items, setItems] = useState (null)

    const [loading, setLoading] = useState(false)

    const {itemId} = useParams ()

    useEffect(() => {
        //Al darle true al loading estamos inicializando el montaje
            setLoading (true)
            PullProducts()
            .then((response) => {
                setItems(response.find( products => products.id === Number(itemId)))
            })
            .catch((error) => console.log(error))
            .finally(() => {setLoading(false)})
        }, [itemId])
        
    return (
        
        <div className='itemDetailContainer-div'>
            {
            loading
            ?<ImSpinner6 />
            //lo que esta colocado entre llaves es el operador de spread, este se encarga de recorrer 
            //todos los items
            :<ItemDetail {...items}/>
            }
        </div>
        
    )
}

export default ItemDetailContainer