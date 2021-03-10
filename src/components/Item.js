
import React from 'react'

const Item = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.imageurl} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.title}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {item.price}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Item