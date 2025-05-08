import React, { useContext, useEffect, useRef, useState } from 'react'
import { TeacherContext } from '../../context/TeacherContext'
import { useParams, Link } from 'react-router-dom'
import CertificateCardType1 from './certificatecardtype1'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const Certification = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const { cerificate, handelCertificate } = useContext(TeacherContext)
  const { type, id } = useParams()
  const certificateRef = useRef()

  useEffect(() => {
    handelCertificate(id, type)
  }, [id, type])

  const certificateURL = `${window.location.origin}/certify/${type}/${id}`
  const shareText = `Check out my verified mentor certificate from Koshish Welfare!`
  const encodedText = encodeURIComponent(shareText)
  const encodedURL = encodeURIComponent(certificateURL)

  const handleDownload = async () => {
    const element = certificateRef.current
    if (!element) return

    try {
      const canvas = await html2canvas(element, { scale: 2 })
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      })
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)
      pdf.save(`${cerificate.name?.replace(/\s+/g, '_')}_certificate.pdf`)
    } catch (error) {
      console.error('PDF generation failed:', error)
    }
  }

  if (!cerificate) {
    return (
      <div className='text-center mt-40 text-lg font-semibold'>
        Loading certificate...
      </div>
    )
  }

  return (
    <div className='relative top-32 mb-36 px-4'>
      <h2 className='text-2xl md:text-4xl text-blue10 font-semibold text-center mb-6'>Verified by Koshish Welfare</h2>
      <p className='text-lg md:text-xl text-center mb-6 w-max-5xl'>
      This certificate has been digitally verified and issued by the Koshish Welfare to acknowledge the authentic contributions and verified mentorship of the individual.</p>
      {cerificate.isCertify ? (
        <>
          {/* Certificate Display */}
          <div className="flex w-[96%] justify-center">
            <div ref={certificateRef}>
              <CertificateCardType1 certificate={cerificate} />
            </div>
          </div>

          {/* Download and Share Buttons */}
          <div className='mt-4 flex justify-center gap-4 flex-wrap'>
            <button
              className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700'
              onClick={handleDownload}
            >
              Download
            </button>

            <div className='relative'>
              <button
                className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
                onClick={() => setShowDropdown(prev => !prev)}
              >
                Share
              </button>

              {showDropdown && (
                <div className='absolute mt-2 right-0 w-48 bg-white border rounded shadow-lg z-10'>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedText}`}
                    target='_blank'
                    rel='noreferrer'
                    className='block px-4 py-2 hover:bg-gray-100'
                  >
                    Share on Twitter
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodedText}%0A${encodedURL}`}
                    target='_blank'
                    rel='noreferrer'
                    className='block px-4 py-2 hover:bg-gray-100'
                  >
                    Share on WhatsApp
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}
                    target='_blank'
                    rel='noreferrer'
                    className='block px-4 py-2 hover:bg-gray-100'
                  >
                    Share on Facebook
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`}
                    target='_blank'
                    rel='noreferrer'
                    className='block px-4 py-2 hover:bg-gray-100'
                  >
                    Share on LinkedIn
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mentor Details */}
          <div className="mt-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 border rounded bg-gray-50 shadow-sm">
  <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Mentor Details</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm sm:text-base">
    <p><strong>Name:</strong> {cerificate.name}</p>
    <p><strong>Subject:</strong> {cerificate.subject}</p>
    <p><strong>Speciality:</strong> {cerificate.speciality}</p>
    <p><strong>Class Teacher of:</strong> {cerificate.classTeacher}</p>

    {/* Format Join Time */}
    <p><strong>Join Time:</strong> {new Date(cerificate.joinTime).toLocaleDateString()}</p>

    {/* Format Leave Time with fallback */}
    <p><strong>Leave Time:</strong> {cerificate.leaveTime ? new Date(cerificate.leaveTime).toLocaleDateString() : 'Still Active'}</p>

    <p><strong>Year of Grad:</strong> {cerificate.yog}</p>
    {cerificate.isTop && <p><strong>Top Performer:</strong> Yes</p>}
    {cerificate.linkedin !== 'NAN' && (
      <p className="col-span-1 sm:col-span-2 break-words">
        <strong>Contact:</strong>{' '}
        <a
          href={cerificate.linkedin}
          className="text-blue-600 underline break-all"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
    )}
  </div>
</div>


        </>
      ) : (
        <div className='text-red-500 text-lg font-medium text-center'>
          The mentor is not certified yet.
        </div>
      )}

      {/* Back to Home Button */}
      <div className='mt-6 text-center'>
        <Link to='/' className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Certification
