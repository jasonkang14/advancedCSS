import React from 'react';

const Button = props => {
    return (
        <button 
            className={props.className}
            name={props.name}
            onClick={(e) => {
                props.btnClicked(e)}
            }
        >
            {props.name}
        </button>
    )
}

export default Button;