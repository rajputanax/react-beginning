import React from 'react'

const Card = ({item,delHandler}) => {
  return (
    <div className='card'>
        {/* <h1>{i}</h1> */}
        <h2>{item.name}</h2>
        <h4>{item.designation}</h4>
        <button onClick={()=>delHandler(item.id)}>Delete</button>
    </div>
  )
}

export default Card