import React, {useState, useEffect } from 'react'
import "./ComponenteRandom.css"

const ComponenteRandom = () => {

    const [pokemon, setPokemon] = useState("")
    
    const [id, setId] = useState(1)

    const [busqueda, setBusqueda] = useState ("")

    useEffect(() => {
        fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
            //el fetch funciona con promesas por eso utilizamos el .then 
            //el primer .then es para obtener la info con formato .json y podamos leerlo
            .then((respuesta) => respuesta.json())
            //en el segundo .then decidimos que hacer con la data
            .then((data) => {
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    img: data.sprites.front_default,

                })
            })
    }, [id])

    const anterior = () =>{
        id > 1 && setId(id -1)
    }

    const siguiente = () =>{
        setId(id +1)
    }

    const search = (e) =>{
        setBusqueda(e.target.value)
    }

    const submit = (e) =>{
        e.preventDefault()
        if (search.length >2){
            fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
            .then ((res) => res.json())
            .then((data) =>{
                setPokemon({
                    nombre: data.name,
                    img: data.sprites.front_default,
            })
                setId(
                    data.id
                )
            })
        }
    }
    return (
        <>
        {!pokemon ? <h3>Cargando...</h3>:
        <div>
            <h3>{pokemon.numero}</h3>
            <h3>{pokemon.nombre}</h3>
            <img src={pokemon.img} />                 
        </div>
        }
        <div>
            <button onClick={anterior}>⬅</button>
            <button onClick={siguiente}>➡</button>
        </div>
        <form onSubmit={submit}>
            <input type="text" value={submit} onChange={search}/>
        </form >
        </>
    )
}

export default ComponenteRandom
