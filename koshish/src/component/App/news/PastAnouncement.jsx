import React, {useContext} from 'react'
import { Helmet } from 'react-helmet-async'
import NoAnouncement from './NoAnouncement'
import { useEffect } from 'react'
import { AppContext } from '../../../context/App'
import NewsCard from './NewsCard'
const PastAnouncement = () => {
  const {pastAnnouncement, handlePastAnnouncement}= useContext(AppContext);
  useEffect(()=>{
    handlePastAnnouncement()
  },[])
  return (
    <div className='mb-36'>
      <Helmet>
        <title>Past Announcements - Koshish</title>
        <meta name='description' content='Explore the past announcements from Koshish and stay informed about our journey.' />
        <meta name='keywords' content='Koshish, Past Announcements, Updates' />
        <meta name='author' content='Koshish Team' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow' />
      </Helmet>
      <div className="w-full px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue10 mb-6">
            Past Announcement
          </h2>
          <p className="text-md sm:text-xl font-sm text-gray-700 leading-relaxed">
            Our mentors are the backbone of Koshish, actively contributing their
            time, skills, and passion to uplift underprivileged students.
            Through consistent efforts and dedication, they guide, teach, and
            inspire children to dream big and achieve more. Their hard work
            plays a crucial role in shaping a better future for the students and
            the community.
          </p>
        </div>
      </div>
       { pastAnnouncement &&pastAnnouncement.length !=0 ?
       
       <div
       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
       >
          {
           pastAnnouncement.map ((announcement , idx)=>{
              return (
                <NewsCard key={idx+"67"} announcement={announcement} />
              )
            })
          }
       </div> : <NoAnouncement/>}
    </div>
  )
}

export default PastAnouncement