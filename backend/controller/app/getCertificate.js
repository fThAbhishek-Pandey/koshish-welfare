
import MemberModel from "../../models/member/MemberSchema.js";
const getCertificate =async (req,res) => {
    try {
        const {type,id} = req.params
        console.log("certificate", type,id)
        if(type== undefined){
            return res.json({success:false, message:"Please define role"})
        }
        if(!id) {
            return res.json({success: false, message:"user is not valid"});
        }
        if(type ==1 ){
            const member = await MemberModel.findOne({ _id: id });
            console.log(member);
            if(!member){
              return  res.json({success:false, message:"user is not find"});
            }
            const {_id,type,name, subject,joinTime,leaveTime,speciality,isTop,yog}= member;
            const sendData = {_id,type,name, subject,joinTime,leaveTime,speciality,isTop,yog}
           return  res.json({success:true, data:sendData});
        }
        else if(type==2){
            res.json({success :true, message:"Work on progress"})
        }
        return res.json({success:false,message:"This type role does not exist"})
    } catch (error) {
        return res.json({success:false,message:error.message})
    }
  

}
const DownloadCirtificate =async (req,res) => {
    try {
        const {type,email,id} = req.body
        if(!id) {
            return res.json({success: false, message:"user is not valid"});
        }
        if(type ==1 ){
            const member = await MemberModel.findOne({ _id: id, isCertify: true });
            if(!member){
                res.json({success:false, message:"user is not find"});
            }
            const {_id}= member;
            const sendData = {_id}
           return  res.json({success:false, data:sendData});
        }
        else if(type==2){
            res.json({success :true, message:"Work on progress"})
        }
    } catch (error) {
        
    }
  

}


export {getCertificate, DownloadCirtificate}