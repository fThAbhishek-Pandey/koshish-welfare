import axios from "axios"
import { toast } from "react-toastify"
const getCertificate = async (backendURL,setCertificate, id, type) => {
    
    try {
        const {data} = await axios.get(backendURL+`/api/app/member/certify/${type}/${id}`)
        if(data.success){
            setCertificate(data.data);
        }
        else {
            toast.info(data.message)
            setCertificate(false);}
    } catch (error) {
        toast.error(error.message)
    }
}
const downloadCertificate = async (backendURL,email, id) => {
    
    try {
        const {data} = await axios.post(backendURL+'/api/app/member/certify/download', {email,id})
        if(data.success){
            // setCertificate(data.data);
        }
        else {
            toast.info(data.message)
            setCertificate(false);}
    } catch (error) {
        toast.error(error.message)
    }
}

export  {getCertificate,downloadCertificate}