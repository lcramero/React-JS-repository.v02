//Modulos
import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail"
import PullProducts from "../../helpers/PullProducts"
import { getFirestore } from '../../firebase/config';

//Boostrap-react módulos
import {ImSpinner6} from "react-icons/im"

//Estilos
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {


    const [items, setItems] = useState (null)

    const [loading, setLoading] = useState(false)

    const {itemId} = useParams ()

    const db = getFirestore()

    const products = db.collection("productos")

    const item = products.doc(itemId)

    item.get()
        .then((doc) => {
            setItems({
                id: doc.id, ...doc.data()
            })
        })
        .catch ((error) => console.log((error)))
        .finally(() => {
            setLoading(false)
        })

    useEffect(() => {
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
            :<ItemDetail {...items}/>
            }
        </div>
        
    )
}

export default ItemDetailContainer