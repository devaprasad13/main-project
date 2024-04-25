
import pic from './busphot.PNG'
import Image from 'react-bootstrap/esm/Image';
import './LOOGIN.css'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function LOGIN()
{
    const navigate = useNavigate();
     
    const[email,setEmail] = useState()
    const[password,setPassword] = useState("karpagam")
  
      axios.defaults.withCredentials = true;

    const Submit = (e)=>
    {
       e.preventDefault();
        axios.post("http://localhost:3001/log",{email,password})
        .then(result=> {console.log(result)
             if(result.data.Status === "Success")
             {
                if(result.data.role === "admin")
                {
                    navigate('/dash')
                }
                else
                {
                    navigate('/land')
                }
             }
             else
             {
                alert("Please Enter the Correct Password/Email")
             }
            })
        .catch(err => console.log(err))
        
    }
    const [see,setsee] = useState();
   const show =()=>
   {
        setsee(!see)
   }
    return(
        <>
         <div class='hell' >
            <div class='bor'data-aos="zoom-in-up" data-aos-duration="1000">
<div class="container d-flex justify-content-center align-items-center min-vh-100" style={{paddingTop:'92px'}}>

<div class="row border rounded-5 p-3  shadow box-area bg-white" 
   >

<div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" id='respo'>
    <div class="featured-image ">
     <Image src={pic} style={{width:'100%'}} rounded></Image>
    </div>
    <p class="text fs-2"  >WELCOME</p>
    <small class=" text-wrap text-center" style={{width: "17rem"}}>Thank you for being a part of KCE Transport</small>
</div> 

 
<div class="col-md-6 right-box ">
   <div class="row align-items-center ">
    
         <div class="header-text mb-4">
              <h2>USER LOGIN</h2>
              
         </div>
         <form onSubmit={Submit}>
         <div class="input-group mb-3">
             <input type="text" class="form-control form-control-lg bg-light fs-6" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}/>
         </div>
         <div class="input-group mb-1">
             <input type={see?"text":"password"} class="form-control form-control-lg bg-light fs-6" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
             <label id="shows"onClick={show} style={{top:'1%',right:'7%',paddingTop:'12px'}}>   {see? <i class="bi bi-eye-fill"></i> : <i class="bi bi-eye-slash-fill"></i>}</label>
         </div>
         <div class="input-group mb-5 d-flex justify-content-between">
             <div class="form-check">
                 <input type="checkbox" class="form-check-input" id="formCheck"/>
                 <label for="formCheck" class="form-check-label text-secondary"><small>Remember Me</small></label>
             </div>
             <div class="forgot">
                 <small><a href="#">Forgot Password?</a></small>
             </div>
         </div>
         <div class="input-group mb-3">
             <button class="btn btn-lg btn-primary w-100 fs-6"  >Login</button>
         </div>
         <div class="input-group mb-3">
             <button class="btn btn-lg btn-light w-100 fs-6"><img src="" style={{width:"20px"}} class="me-2"/><small><i class='bx bxl-google'></i> Sign In with Google</small></button>
         </div>
         <div class="row">
             <small>Don't have account? send Request <a href="#">Contact us</a></small>
         </div>
         </form>
   </div>
</div> 
</div>
</div>
</div>
</div>
        </>
    )
}