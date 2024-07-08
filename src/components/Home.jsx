import React from 'react'

const Home = ({info}) => {
    // console.log("props", props)
    const {id,name} = info;
    console.log(id,name)
  return (
    <div>{id}:{name}</div>
  )
}

export default Home