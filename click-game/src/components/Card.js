import React from 'react';

const Card = (props) => {
    return (
        <>
        <button onClick={() => props.chosenFriend(props.id)}><img src={props.image}/></button>
        </>
    )
}

export default Card;