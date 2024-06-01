
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Miniland from "./User/deva";
import Landingpages from "./User/Landingpage";
import Abbout from "./User/abbout";
import CARD from "./User/LOOGINCARD";
import LOGIN from "./User/LOOGIN";
import FACULTY from "./User/LOOGINFACULTY";
import ADMIN from "./User/LOOGINADMIN";
import Dash from './admin/Dash';
import ADD from "./admin/Add";
import NOTIFY from "./admin/Notify";
import Fee from "./User/feesdetails";
import Rotes from "./admin/Routes";
import ProfilePhot from "./User/profile";
import View from "./admin/view";
import Update from "./admin/userup";
import Addroutes from "./admin/routeadd";
import Sidebar from "./Admins/Sidebar";
import Abouts from "./Admins/Abouts";
export default function App() {
  return (
   <>
     <Routes>
         <Route path='/' element={<Miniland/>}></Route>
         <Route path='/card' element={<CARD/>}></Route>
          <Route path='/land' element={<Landingpages/>}></Route>
           <Route path='/abbout' element={<Abbout/>}></Route>
           <Route path='/fee' element={<Fee/>}></Route>
           <Route path='/log' element={<LOGIN/>}></Route>
           <Route path='/logf' element={<FACULTY/>}></Route>
           <Route path='/dash' element={<Dash/>}></Route>
           <Route path='/not' element={<NOTIFY/>}></Route>
           <Route path='/user' element={<ADD/>}></Route>
           <Route path='/ad' element={<ADMIN/>}></Route>
           <Route path='/rot' element={<Rotes/>}></Route>
           <Route path='/prof' element={<ProfilePhot/>}></Route>
           <Route path='/view' element={<View/>}></Route>
           <Route path='/up/:id' element={<Update/>}></Route>
           <Route path ='/addroute' element={<Addroutes/>}></Route>
           <Route path ='/sidebar' element={<Sidebar/>}></Route>
           <Route path ='/sidebarsabout' element={<Abouts/>}></Route>
  
           
           
     </Routes>
    
   </>
  );
}

