import './run.css';

import {useState} from 'react';
import axios, * as others from 'axios';
import { useEffect } from 'react';

export default function Running()
{

    const [count,setCount] = useState(0);


    useEffect(()=>
        {
            const counting = async ()=>
                {
                    try
                    {
                        const response = await axios.get("http://localhost:3001/count")
                        console.log(response.data.counter);
                        setCount(response.data.counter);
                    }
                    catch(err)
                    {
                         console.log(err);
                    }
                }

                counting();
        })


    return(
        <>
        <div class='he'>
        <h5 class="words">Welcome to Karpagam College of Engineering Transport <i class="bi bi-dot" ></i> Total Users:<span style={{color:'#f54242',fontFamily:'bold'}}>{count}</span>   <i class="bi bi-dot" ></i> Total Buses: <span style={{color:'#f54242',fontFamily:'bold'}}>70</span> </h5>
        </div>
        </>
    )
}