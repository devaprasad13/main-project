import { Link } from 'react-router-dom'
import './zome.css'
import pho from './t.jpg'
export default function Zome()
{
    return(
        <>
      <div>
        
      <select  value={from}onChange={(e)=>setFrom(e.target.value)} >
                        <option value="">Select</option>
                       <option value="TIRUPPUR NEW BUS STAND">TIRUPPUR</option>
                       <option value="Perumanallur">Perumanallur</option>
                       <option value="Kannakapalayam">Kanakampalayam</option>
                       <option value="Anna Nagar">Anna Nagar</option>
                       <option value="Pandiya-Nagar">Pandiayanagar</option>
                       <option value="PoyamaPalayam">PoyamaPalayam</option>
                       <option value="Pitchampalayam">Pitchampalayam</option>
                       <option value="Pitchampalayam">Tiruppur new Bustand</option>
                       <option value="Nesavalar Colony">Nesavalar Colony</option>
                       <option value="Shanthi-Theater">Shanthi Thearter</option>
                       <option value="Mettupalayam">Mettupalayam</option>
                       <option value="Pushpa-Theatre">Pushpa Theater</option>
                       <option value="Town-Hall">Town Hall</option>
                       <option value="Tiruppur old Bustand">Tiruppur Old Bustand</option>
                       <option value="Veerapandi">Veerapandi</option>
                       <option value="palladam">Palladam</option>
                       <option value="Coimbatore" style={{fontSize:"3rem"}}>Coimbatore</option>
                     </select>
       
         
</div>
       </>
    )
   
        
    
    
   
}

