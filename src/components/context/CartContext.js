//Modulos
import { createContext, useEffect } from 'react'
import { useState } from 'react'

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem("cart")) || []
//Este CartProvider cumple la función de limpiar el código de App.js, se comporta como un componente más y App.js lo utiliza 
//para llevar a cabo las funciones
export const CartProvider = ({children}) => {
    

    const [cart, setCart] = useState(init)
    useEffect (() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])
    const addToCart = (item => {
        setCart([...cart, item])
    })

    const calcQuantity = () => {
        return cart.reduce((acc, product) => acc + product.counter, 0)
    }

    const calcTotal = () => {
        return cart.reduce((acc, product) => acc + product.price * product.counter, 0)
    }

    const removeItem = (itemId) => {
        const newCart = cart.filter((product) => product.id !== itemId)
        setCart(newCart)
    }


    return (
        <CartContext.Provider value={{
            addToCart,
            calcQuantity,
            calcTotal,
            removeItem,
            cart}}>
            {children}
        </CartContext.Provider>
    )
}