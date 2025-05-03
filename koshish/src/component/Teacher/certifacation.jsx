import React, { useContext, useEffect } from 'react'
import { TeacherContext } from '../../context/TeacherContext'
import {useParams}from 'react-router-dom'
import CertificateCardType1 from './certificatecardtype1'
const Certifacation = () => {
  const { cerificate, handelCertificate} =useContext(TeacherContext)
  const {type,id}= useParams()
    useEffect(()=>{
        handelCertificate(id,type)
    },[id,type])
  return cerificate && (
    <div className='relative top-32 mb-32'>
        <h2>certifacation</h2>
        <h1>{id}-{type==1? "teacher":"student"}</h1>
        <h1>{cerificate.name}</h1>
        {
          type==1 && <CertificateCardType1 certificate={cerificate}  />
        }
    </div>
  )
}

export default Certifacation