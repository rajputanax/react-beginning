import React, { useState } from 'react'
import Card from './Card'

const Filtered = () => {
    const [data , setData] = useState([{
        id:1,
        name:'Anas Jameel',
        designation:'Exec. Frontend Developer'
    },
        {
        id:2,
        name:'Mhd. Naveed-ur-Rehman',
        designation:'Exec. Frontend Developer'
    },
        {
        id:3,
        name:'Amir Ali Anwar',
        designation:'Senior Frontend Developer'
    },
        {
        id:4,
        name:'Mubashar Akram',
        designation:'Senior Frontend Developer'
    },
        {
        id:5,
        name:'Hafiz Rizwan Maqbool',
        designation:'DM'
    },])
    const [data1, setData1] = useState([
        {
            id:1,
            name:'Anas Jameel',
            designation:'Exec. Frontend Developer'
        },
            {
            id:2,
            name:'Mhd. Naveed-ur-Rehman',
            designation:'Exec. Frontend Developer'
        },
            {
            id:3,
            name:'Amir Ali Anwar',
            designation:'Senior Frontend Developer'
        },
            {
            id:4,
            name:'Mubashar Akram',
            designation:'Senior Frontend Developer'
        },
            {
            id:5,
            name:'Hafiz Rizwan Maqbool',
            designation:'DM'
        }
    ])



const deleteHandler = (id) =>{
    let updatedData = data.filter(item=> item.id !== id);
    console.log(updatedData)
        setData(updatedData)
}

  return (
    <>
    <div className='card-list'>
        {
            data.map((item)=>{
                return <Card key={item.id}  item={item} delHandler={deleteHandler} />
            })
        }
    </div>
    <div className='card-list'>
        {
            data1.map((item)=>{
                return <Card key={item.id}  item={item} delHandler={deleteHandler} />
            })
        }
    </div>
    </>
  )
}

export default Filtered