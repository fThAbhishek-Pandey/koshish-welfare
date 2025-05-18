import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../../context/App'
import { useContext } from 'react'
const Myanouncement = () => {
    const {docuTitle, setDocuTitle,myAnnouncement,handlemyAnnouncement} = useContext(AppContext );
      
    const {id} = useParams('id')
    useEffect(()=>{
      handlemyAnnouncement(id)
    },[])
    useEffect(()=>{
      setDocuTitle(`${myAnnouncement.heading}-Koshish`)
  },[docuTitle,id,myAnnouncement])
    console.log("_id: ",id);
    
  return myAnnouncement && (
    <div className="max-w-6xl relative top-20 md:top-32 mb-20 md:mb-32 mx-auto p-6 bg-green-100 shadow-lg rounded-xl border border-gray-200">
      <Helmet>
        <title>{myAnnouncement.heading} - Koshish</title>
        <meta name='description' content={myAnnouncement.description} />
        <meta name='keywords' content={myAnnouncement.keywords} />
        <meta name='author' content={myAnnouncement.author} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow' />
      </Helmet>

      <img
        src={myAnnouncement.image}
        alt={myAnnouncement.heading}
        className="w-full h-60 object-cover rounded-lg shadow-md"
      />
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-blue10">{myAnnouncement.heading}</h1>
        <p className="mt-2 mb-4 text-gray-500 text-sm">📅 Date: {new Date(myAnnouncement.date).toDateString()}</p>
        <div className="mt-2 text-gray-900 whitespace-pre-line">
        <Markdown >{myAnnouncement.announcement}</Markdown></div>  
      </div>
    </div>
  )
}

export default Myanouncement