import './LOOGINCARD.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

export default function CARD()
{
  const navigate = useNavigate();
    return(
      <>
         
         <div class='hey'>

         <div class="wrapper">
      <div class="card" data-aos="fade-up-right" data-aos-duration="1000">
        <div class="circle">
          <div class="bar"></div>
          <div class="box">
            <Image style={{width:'12em',marginLeft:'-18px'}} src='https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Student-3-512.png'></Image>
          </div>
        </div>
        <div class="text">Student</div>
        <Button variant="dark"  style={{marginTop:'5%',marginLeft:'2%',fontWeight:"500"}} onClick={()=>navigate('/log') }>Login</Button>
      </div>
      <div class="card js"  data-aos="fade-down" data-aos-duration="1000">
        <div class="circle">
          <div class="bar"></div>
          <div class="box">
          <Image style={{width:'12em',marginLeft:'-18px'}} src='https://cdn2.iconfinder.com/data/icons/school-flat-circle/512/Guy_hipster_jumper_man_teacher_sir-512.png'></Image>
          </div>
        </div>
        <div class="text">Faculty</div>
        <Button variant="dark"   style={{marginTop:'5%',marginLeft:'2%',fontWeight:"500"}} onClick={()=>navigate('/logf') }>Login</Button>
      </div>
      <div class="card react" data-aos="fade-up-left" data-aos-duration="1000">
        <div class="circle">
          <div class="bar"></div>
          <div class="box">
          <Image style={{width:'12em',marginLeft:'-18px'}} src='https://static.vecteezy.com/system/resources/thumbnails/001/261/039/small_2x/male-call-center-agent.jpg' roundedCircle></Image>
          </div>
        </div>
        <div class="text">Admin</div>
        <Button variant="dark" onClick={()=>navigate('/ad') } style={{marginTop:'5%',marginLeft:'2%',fontWeight:"500"}}>Login</Button>
      </div>
    </div>
         </div>
      
      </>
    )
}