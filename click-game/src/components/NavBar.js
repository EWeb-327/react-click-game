import React from 'react';

const Nav = (props) => {
    return(
        <>
        <nav>
        <h1>Clicky Game</h1>
        <h2 className={`message ${props.message === false ? 'correct' : 'wrong'}`}>{props.message === false ? 'You guessed correctly!' : 'You guessed incorrectly!'}</h2>
        <h1>Score: {props.score} | Top Score: {props.topScore}</h1>
        </nav>
        </>
    )
}

export default Nav;