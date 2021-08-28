import React from 'react'

export const TodoItem = ({data,handleToggle}) => {
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.status ? "Completed" : "Pending"}</p>
            <button onClick={ () => handleToggle(data.id) } style={ {background : `${data.status ? 'green' : 'red'}`, color: 'white', border: 'none'} }>Toggle</button>
        </div>
    )
}
