import React, { useState } from 'react'

function Game(props) {


    const  [color, setColor] = useState( 'game--btn-before' )

    function submit() {
        setColor (prevState => {
         return   prevState==='game--btn-before' ? 'game--btn-after' : 'game--btn-before'
        } )
        props.submiting(props.id)
    }
    return (
            <button
                onClick={submit}
                className={color}
            >
                {props.number}
            </button>
    )
}

export default Game