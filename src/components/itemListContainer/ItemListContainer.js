import React, {useEffect, useState} from 'react'

//Modulos
import PullProducts from "../../helpers/PullProducts"
import ItemList from "../itemList/ItemList"
import {ImSpinner6} from "react-icons/im"
//Estilos
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
  
  const [items, setItems] = useState ([])

  const [loading, setLoading] = useState(false)


//Con esta funcion traemos los productos

/*  const pullProducts = () =>{
    return new Promise ((resolve, reject) => {
      setTimeout(() =>{
        resolve (Stock)
        reject ("rechazado")
      }, 2000)
    })
  } */

  useEffect(() => {
//Al darle true al loading estamos inicializando el montaje
    setLoading (true)
    PullProducts()
    .then((response) => {
      setItems(response)
    })
    .catch((error) => console.log(error))
    .finally(() => {setLoading(false)})
  }, [])

  return (
    <>
    <div>
      {
        loading
        ?<ImSpinner6 />
        :<ItemList products={items} />
      }
    </div>
    <div><h2>{props.greeting}</h2></div>
    </>
  )
}
export default ItemListContainer;
