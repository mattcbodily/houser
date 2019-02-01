import React from 'react';

function House(props){
    return(
        <div>
            <button>X</button>
            <p>Property Name: {props.houses.name}</p>
            <p>Address: {props.houses.address}</p>
            <p>City: {props.houses.city}</p>
            <p>State: {props.houses.state}</p>
            <p>Zip: {props.houses.zip}</p>
            <p>{props.houses.img}</p>
            <p>Monthly Mortgage: {props.houses.mortgage}</p>
            <p>Desired Rent: {props.houses.rent}</p>
        </div>
    )
}

export default House;