import {useEffect} from 'react'
import { useState } from 'react'

export default function Kural()
{
    const [records,setRecords] = useState([])
    useEffect(()=>
    {
        fetch('https://api-thirukkural.web.app/api?num=x')
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(err=>console.log(err))

    },[])
    return(
        <>
           <h1>{records.map((list,index)=> (<li key={index}>{list.id} | {list.name} </li>))}</h1>
        </>
    )
}