import React from 'react'
import Item from "../item/Item"

//Estilos
import "./ItemList.css"


    const ItemList = ({products=[]}) => {
        return (
            <div>
                <h3>Products</h3>
                <div id="row">
                {products.map((item) => <Item {...item} key={item.id}/>)}
                </div>
            </div>
        )
}

export default ItemList

