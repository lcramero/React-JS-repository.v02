import React from 'react'
import Item from "../Item/Item"

//Estilos
import "./ItemList.css"


    const ItemList = ({products=[]}) => {
        return (
            <div>
                <div id="row">
                {products.map((item) => <Item {...item} key={item.id}/>)}
                </div>
            </div>
        )
}

export default ItemList

