import React from 'react'

    const Item = ({title ,description, price, image}) => {
        return (
            <div>
                <p>{title}</p>
                <img src={image} alt="imagen"/>
                <p>Description: {description}</p>
                <p>${price}</p>
            </div>
    )
}
export default Item


