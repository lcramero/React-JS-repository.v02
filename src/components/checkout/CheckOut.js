//Modulos
import React, { useState, useContext } from 'react'
import {CartContext} from "../context/CartContext"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import firebase from 'firebase';
import { getFirestore } from '../../firebase/config'
import "firebase/firestore";
import Swal from 'sweetalert2';

//Estilos
import "../checkout/CheckOut.css"

export const CheckOut = () => {

    const [cart, clearCart, calcTotal] = useContext(CartContext);
    
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault ()

        const order = {
            buyer: {
                email,
                name, 
                surname,
                phone
            },
            item: cart,
            total_price: calcTotal(),
            data: firebase.firestore.Timestamp.fromDate(new Date())
        }
        console.log(order);

        const db = getFirestore();
    
        const orders = db.collection("ordenes")
    
        orders.add(order)
            .then ((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Su compra fue realizada con éxito',
                    text: `Guarde su número de compra (${res.id})`,
                    willClose: () =>{
                        clearCart()
                    }
                })
            })
            .finally(() => {
                console.log("operación realizada con éxito");
            })

            cart.forEach((item) => {
                const docRef = db.collection("productos").doc(item.id)
                docRef.get()
                    .then ((doc) => {
                        docRef.update({
                            stock: doc.data().stock -item.counter
                        })
                    })
            });
    }
    


    return (
        <div className='checkout-content'>
            <img className='space' src='https://images.unsplash.com/photo-1575202332411-b01fe9ace7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'></img>
            <div className='checkout-form space'>
                <form onSubmit ={handleSubmit} className='container mt-3'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' className='form-control' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input type='text' className='form-control'onChange={(e)=>setName(e.target.value)} value={name}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='apellido'>Apellido</label>
                        <input type='text' className='form-control'onChange={(e)=>setSurname(e.target.value)} value={surname}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='telefono'>Teléfono</label>
                        <input type='number' className='form-control'onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                    </div>
                    <Button type="submit" className='btn btn-success'>Finalizar</Button>
                    <Link to="/cart" className="btn btn-info">Volver al carrito</Link>
                </form>
            </div>
        </div>
    )
}
