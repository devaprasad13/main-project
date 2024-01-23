
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Miniland from "./deva";
import Landingpages from "./Landingpage";
import Abbout from "./abbout";
import CARD from "./LOOGINCARD";
import LOGIN from "./LOOGIN";
import FACULTY from "./LOOGINFACULTY";
import ADMIN from "./LOOGINADMIN";
import Dash from './admin/Dash';
import ADD from "./admin/Add";
import NOTIFY from "./admin/Notify";
import Fee from "./feesdetails";
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
     </Routes>
   
   </>
  );
}

