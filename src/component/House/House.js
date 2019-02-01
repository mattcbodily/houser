import React from 'react';

function House(props){
    return(
        <div>
            <button>X</button>
            <p>{props.houses.name}</p>
            <p>{props.houses.address}</p>
            <p>{props.houses.city}</p>
            <p>{props.houses.state}</p>
            <p>{props.houses.zip}</p>
        </div>
    )
}

export default House;