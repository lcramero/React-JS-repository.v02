//Modulos
import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import { getFirestore } from '../../firebase/config'

//Boostrap-react módulos
import {ImSpinner6} from "react-icons/im"

//Estilos
import "./ItemListContainer.css"

const ItemListContainer = () => {
  
  const [items, setItems] = useState ([])

  const [loading, setLoading] = useState(false)
  
  const {categoryId} = useParams()

  
  useEffect(() => {
  
    const db = getFirestore();
    
    const products =  db.collection("productos")

    if (categoryId){
      const filter = products.where("category", "==", categoryId) 
      filter.get()
        .then((res) => {
          const newItem = res.docs.map((doc)=> {
            return {id: doc.id, ...doc.data()}
          })
          setItems (newItem)
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false)
        })
    }else{
      products.get()
        .then((res) => {
          const newItem = res.docs.map((doc) =>  {
            return {id: doc.id, ...doc.data()}
          })
          setItems(newItem)
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false)
        })
      }
    }, [categoryId])
  
    return (
      <>
      <div>
        {
          loading
          ?<ImSpinner6 />
          :<ItemList products={items} />
        }
      </div>
      </>
    )
}

export default ItemListContainer;













/*  //Al darle true al loading estamos inicializando el montaje
 setLoading (true)
 PullProducts()
 //Lo que está dentro de setItems es un filtro, me trae solamente los productos que coincidan con la categoría que aparece
 //en la ruta seleccionada por el usuario
 .then((response) => {
   if (categoryId){
   setItems(response.filter(products => products.category === categoryId))
 }
   else {setItems(response)}
 })
 .catch((error) => console.log(error))
 .finally(() => {setLoading(false)}) */