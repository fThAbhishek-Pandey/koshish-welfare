
import { createContext, useState } from "react";
import {getCertificate,downloadCertificate} from '../utils/Teacher/Certificate'
export const TeacherContext = createContext(null);


const  TeacherContextProvider = (props) => {
    const [teaToken, setTeaToken]= useState(false);
    const [cerificate, setCertificate] = useState({});
    const backendURL= import.meta.env.VITE_BACKEND_URL
    const handelCertificate = (id,type)=>{
          getCertificate(backendURL,setCertificate, id,type)
    }
    const handelDownloadCertificate = (email, id)=>{
         downloadCertificate(backendURL,email, id);
  }
const value = {
    teaToken, setTeaToken,backendURL,
    cerificate, setCertificate,handelCertificate,handelDownloadCertificate
 }
   
return (
    
      <TeacherContext.Provider value={value}>
            {props.children}
      </TeacherContext.Provider>
  
  );
}
export default TeacherContextProvider